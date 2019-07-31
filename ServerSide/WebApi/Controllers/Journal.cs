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
    public class JournalController : ControllerBase
    {
        private readonly AppDbContext _context;

        public JournalController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/journals
        [HttpGet]
        public IEnumerable<Journal> GetJournals()
        { 
           return _context.Journals;
        }

        // GET: api/journals/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetJournal([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var journal = await _context.Journals.FindAsync(id);

            if (journal == null)
            {
                return NotFound();
            }

            return Ok(journal);
        }

        // PUT: api/journals/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJournal([FromRoute] int id, [FromBody] Journal journal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != journal.ID)
            {
                return BadRequest();
            }

            _context.Entry(journal).State = EntityState.Modified;

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

        // POST: api/journals
        [HttpPost]
        public async Task<IActionResult> Postjournal([FromBody] Journal journal)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Journals.Add(journal);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getjournals", new { id = journal.ID }, journal);
        }

        // DELETE: api/journals/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletejournal([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var journal = await _context.Journals.FindAsync(id);
            if (journal == null)
            {
                return NotFound();
            }

            _context.Journals.Remove(journal);
            await _context.SaveChangesAsync();

            return Ok(journal);
        }

        private bool  Exists(int id)
        {
            return _context.Journals.Any(e => e.ID == id);
        }
    }
}