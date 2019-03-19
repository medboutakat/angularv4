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
    public class StatutsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public StatutsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Statuts
        [HttpGet]
        public IEnumerable<Statut> GetStatuts()
        { 
           return _context.Statuts;
        }

        // GET: api/Statuts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStatut([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Statut = await _context.Statuts.FindAsync(id);

            if (Statut == null)
            {
                return NotFound();
            }

            return Ok(Statut);
        }

        // PUT: api/Statuts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatut([FromRoute] int id, [FromBody] Statut Statut)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Statut.ID)
            {
                return BadRequest();
            }

            _context.Entry(Statut).State = EntityState.Modified;

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

        // POST: api/Statuts
        [HttpPost]
        public async Task<IActionResult> PostStatut([FromBody] Statut Statut)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Statuts.Add(Statut);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatuts", new { id = Statut.ID }, Statut);
        }

        // DELETE: api/Statuts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatut([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Statut = await _context.Statuts.FindAsync(id);
            if (Statut == null)
            {
                return NotFound();
            }

            _context.Statuts.Remove(Statut);
            await _context.SaveChangesAsync();

            return Ok(Statut);
        }

        private bool  Exists(int id)
        {
            return _context.Statuts.Any(e => e.ID == id);
        }
    }
}