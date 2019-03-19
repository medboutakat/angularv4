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
    public class BankAccountsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BankAccountsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/BankAccounts
        [HttpGet]
        public IEnumerable<BankAccount> GetBankAccounts()
        { 
           return _context.BankAccounts;
        }

        // GET: api/BankAccounts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBankAccount([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var BankAccount = await _context.BankAccounts.FindAsync(id);

            if (BankAccount == null)
            {
                return NotFound();
            }

            return Ok(BankAccount);
        }

        // PUT: api/BankAccounts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBankAccount([FromRoute] int id, [FromBody] BankAccount BankAccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != BankAccount.ID)
            {
                return BadRequest();
            }

            _context.Entry(BankAccount).State = EntityState.Modified;

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

        // POST: api/BankAccounts
        [HttpPost]
        public async Task<IActionResult> PostBankAccount([FromBody] BankAccount BankAccount)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.BankAccounts.Add(BankAccount);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBankAccounts", new { id = BankAccount.ID }, BankAccount);
        }

        // DELETE: api/BankAccounts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBankAccount([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var BankAccount = await _context.BankAccounts.FindAsync(id);
            if (BankAccount == null)
            {
                return NotFound();
            }

            _context.BankAccounts.Remove(BankAccount);
            await _context.SaveChangesAsync();

            return Ok(BankAccount);
        }

        private bool  Exists(int id)
        {
            return _context.BankAccounts.Any(e => e.ID == id);
        }
    }
}