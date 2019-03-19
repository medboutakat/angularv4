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
    public class LessorsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LessorsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Lessors
        [HttpGet]
        public IEnumerable<Lessor> GetLessors()
        { 
           return _context.Lessors;
        }

        // GET: api/Lessors/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetLessor([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Lessor = await _context.Lessors.FindAsync(id);

            if (Lessor == null)
            {
                return NotFound();
            }

            return Ok(Lessor);
        }

        // PUT: api/Lessors/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLessor([FromRoute] int id, [FromBody] Lessor Lessor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Lessor.ID)
            {
                return BadRequest();
            }

            _context.Entry(Lessor).State = EntityState.Modified;

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

        // POST: api/Lessors
        [HttpPost]
        public async Task<IActionResult> PostLessor([FromBody] Lessor Lessor)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Lessors.Add(Lessor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLessors", new { id = Lessor.ID }, Lessor);
        }

        // DELETE: api/Lessors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLessor([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Lessor = await _context.Lessors.FindAsync(id);
            if (Lessor == null)
            {
                return NotFound();
            }

            _context.Lessors.Remove(Lessor);
            await _context.SaveChangesAsync();

            return Ok(Lessor);
        }

        private bool  Exists(int id)
        {
            return _context.Lessors.Any(e => e.ID == id);
        }
    }
}