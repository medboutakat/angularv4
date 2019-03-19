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
    public class ContractsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContractsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Contracts
        [HttpGet]
        public IEnumerable<Contract> GetContracts()
        { 
           return _context.Contracts;
        }

        // GET: api/Contracts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetContract([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Contract = await _context.Contracts.FindAsync(id);

            if (Contract == null)
            {
                return NotFound();
            }

            return Ok(Contract);
        }

        // PUT: api/Contracts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContract([FromRoute] int id, [FromBody] Contract Contract)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Contract.ID)
            {
                return BadRequest();
            }

            _context.Entry(Contract).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Exists(id))
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

        // POST: api/Contracts
        [HttpPost]
        public async Task<IActionResult> PostContract([FromBody] Contract Contract)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Contracts.Add(Contract);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContracts", new { id = Contract.ID }, Contract);
        }

        // DELETE: api/Contracts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContract([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Contract = await _context.Contracts.FindAsync(id);
            if (Contract == null)
            {
                return NotFound();
            }

            _context.Contracts.Remove(Contract);
            await _context.SaveChangesAsync();

            return Ok(Contract);
        }

        private bool  Exists(int id)
        {
            return _context.Contracts.Any(e => e.ID == id);
        }
    }
}