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
    public class BanksController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BanksController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Banks
        [HttpGet]
        public IEnumerable<Bank> GetBanks()
        {
           return _context.Banks;
        }

        // GET: api/Banks/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBank([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Bank = await _context.Banks.FindAsync(id);

            if (Bank == null)
            {
                return NotFound();
            }

            return Ok(Bank);
        }

        // PUT: api/Banks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBank([FromRoute] int id, [FromBody] Bank Bank)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Bank.ID)
            {
                return BadRequest();
            }
            
            _context.Entry(Bank).State = EntityState.Modified;

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

        // POST: api/Banks
        [HttpPost]
        public async Task<IActionResult> PostBank([FromBody] Bank Bank)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Banks.Add(Bank);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBanks", new { id = Bank.ID }, Bank);
        }

        // DELETE: api/Banks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBank([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Bank = await _context.Banks.FindAsync(id);
            if (Bank == null)
            {
                return NotFound();
            }

            _context.Banks.Remove(Bank);
            await _context.SaveChangesAsync();

            return Ok(Bank);
        }

        private bool  Exists(int id)
        {
            return _context.Banks.Any(e => e.ID == id);
        }
    }
}