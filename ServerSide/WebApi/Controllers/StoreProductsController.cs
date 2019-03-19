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
    public class StoreProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public StoreProductsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/StoreProducts
        [HttpGet]
        public IEnumerable<StoreProduct> GetStoreProducts()
        { 
           return _context.StoreProducts;
        }

        // GET: api/StoreProducts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Product = await _context.StoreProducts.FindAsync(id);

            if (Product == null)
            {
                return NotFound();
            }

            return Ok(Product);
        }

        // PUT: api/StoreProducts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct([FromRoute] int id, [FromBody] StoreProduct storeProduct)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != storeProduct.ID)
            {
                return BadRequest();
            }

            _context.Entry(storeProduct).State = EntityState.Modified;

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

        // POST: api/StoreProducts
        [HttpPost]
        public async Task<IActionResult> PostProduct([FromBody] StoreProduct storeProduct)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.StoreProducts.Add(storeProduct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStoreProducts", new { id = storeProduct.ID }, storeProduct);
        }

        // DELETE: api/StoreProducts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var storeProduct = await _context.StoreProducts.FindAsync(id);
            if (storeProduct == null)
            {
                return NotFound();
            }

            _context.StoreProducts.Remove(storeProduct);
            await _context.SaveChangesAsync();

            return Ok(storeProduct);
        }

        private bool  Exists(int id)
        {
            return _context.StoreProducts.Any(e => e.ID == id);
        }
    }
}