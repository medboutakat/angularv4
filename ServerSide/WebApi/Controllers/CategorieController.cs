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
    public class ClientCategoriesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientCategoriesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Categories
        [HttpGet]
        public IEnumerable<ClientCategory> GetClientCategories()
        { 
           return _context.ClientCategories;
        }

        // GET: api/Categories/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetClientCategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var categorie = await _context.ClientCategories.FindAsync(id);

            if (categorie == null)
            {
                return NotFound();
            }

            return Ok(categorie);
        }

        // PUT: api/Categories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGetClientCategory([FromRoute] int id, [FromBody] ClientCategory categorie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != categorie.ID)
            {
                return BadRequest();
            }

            _context.Entry(categorie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategorieExists(id))
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

        // POST: api/Categories
        [HttpPost]
        public async Task<IActionResult> PostGetClientCategory([FromBody] ClientCategory categorie)
        {
 
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ClientCategories.Add(categorie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGetClientCategory", new { id = categorie.ID }, categorie);
        }

        // DELETE: api/Categories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGetClientCategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var categorie = await _context.ClientCategories.FindAsync(id);
            if (categorie == null)
            {
                return NotFound();
            }

            _context.ClientCategories.Remove(categorie);
            await _context.SaveChangesAsync();

            return Ok(categorie);
        }

        private bool  CategorieExists(int id)
        {
            return _context.ClientCategories.Any(e => e.ID == id);
        }
    }
}