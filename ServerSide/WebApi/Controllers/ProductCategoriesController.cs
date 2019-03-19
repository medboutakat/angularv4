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
    public class ProductCategoriesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductCategoriesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ProductCategories
        [HttpGet]
        public IEnumerable<ProductCategorie> GetProductCategories()
        { 
           return _context.ProductCategories;
        }

        // GET: api/ProductCategories/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductCategorie([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ProductCategorie = await _context.ProductCategories.FindAsync(id);

            if (ProductCategorie == null)
            {
                return NotFound();
            }

            return Ok(ProductCategorie);
        }

        // PUT: api/ProductCategories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductCategorie([FromRoute] int id, [FromBody] ProductCategorie ProductCategorie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ProductCategorie.ID)
            {
                return BadRequest();
            }

            _context.Entry(ProductCategorie).State = EntityState.Modified;

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

        // POST: api/ProductCategories
        [HttpPost]
        public async Task<IActionResult> PostProductCategorie([FromBody] ProductCategorie ProductCategorie)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ProductCategories.Add(ProductCategorie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductCategories", new { id = ProductCategorie.ID }, ProductCategorie);
        }

        // DELETE: api/ProductCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductCategorie([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ProductCategorie = await _context.ProductCategories.FindAsync(id);
            if (ProductCategorie == null)
            {
                return NotFound();
            }

            _context.ProductCategories.Remove(ProductCategorie);
            await _context.SaveChangesAsync();

            return Ok(ProductCategorie);
        }

        private bool  Exists(int id)
        {
            return _context.ProductCategories.Any(e => e.ID == id);
        }
    }
}