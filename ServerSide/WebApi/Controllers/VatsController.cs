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
    [DisableCors]
    public class VatsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VatsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Vats
        [HttpGet]
        public IEnumerable<Vat> GetVats()
        { 
           return _context.Vats;
        }

        // GET: api/Vats/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetVat([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Vat = await _context.Vats.FindAsync(id);

            if (Vat == null)
            {
                return NotFound();
            }

            return Ok(Vat);
        }

        // PUT: api/Vats/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVat([FromRoute] int id, [FromBody] Vat Vat)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Vat.ID)
            {
                return BadRequest();
            }

            _context.Entry(Vat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VatExists(id))
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

        // POST: api/Vats
        [HttpPost]
        public async Task<IActionResult> PostVat([FromBody] Vat Vat)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Vats.Add(Vat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVats", new { id = Vat.ID }, Vat);
        }

        // DELETE: api/Vats/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVat([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Vat = await _context.Vats.FindAsync(id);
            if (Vat == null)
            {
                return NotFound();
            }

            _context.Vats.Remove(Vat);
            await _context.SaveChangesAsync();

            return Ok(Vat);
        }

        private bool  VatExists(int id)
        {
            return _context.Vats.Any(e => e.ID == id);
        }
    }
}