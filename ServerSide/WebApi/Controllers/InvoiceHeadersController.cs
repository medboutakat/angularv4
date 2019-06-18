using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi;
using Microsoft.AspNetCore.Cors;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // [DisableCors]
    public class InvoiceHeadersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public InvoiceHeadersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Vats
        [HttpGet]
        public IEnumerable<InvoiceHeader> GetInvoiceHeaders()
        { 
             return _context.InvoiceHeaders.Include(c =>c.InvoiceDetails);
        // //    return _context.InvoiceHeaders.Include(navigationPropertyPath: c =>c.InvoiceDetails);
        }

        // GET: api/Vats/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetVat([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Vat = await _context.InvoiceHeaders.FindAsync(id);

            if (Vat == null)
            {
                return NotFound();
            }

            return Ok(Vat);
        }

        // PUT: api/Vats/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvoiceHeader([FromRoute] int id, [FromBody] InvoiceHeader invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != invoice.ID)
            {
                return BadRequest();
            }

            _context.Entry(invoice).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvoiceHeaderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/InvoiceHeaders
        [HttpPost]
        public async Task<IActionResult> PostInvoiceHeader([FromBody] InvoiceHeader invoice)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.InvoiceHeaders.Add(invoice);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInvoiceHeaders", new { id = invoice.ID }, invoice);
        }

        // DELETE: api/InvoiceHeaders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvoiceHeader([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Vat = await _context.InvoiceHeaders.FindAsync(id);
            if (Vat == null)
            {
                return NotFound();
            }

            _context.InvoiceHeaders.Remove(Vat);
            await _context.SaveChangesAsync();

            return Ok(Vat);
        }

        private bool InvoiceHeaderExists(int id)
        {
            return _context.InvoiceHeaders.Any(e => e.ID == id);
        }
    }
}