using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
namespace WebApi.Models
{
    public class Bank
    {
        [Key] 
        public int ID { get; set; }
        // [Index(IsUnique=true)]
        public string ShortName { get; set; }
        public string Name { get; set; }

        public string Remark { get; set; }
 
 
        [ForeignKey("BankID")]
        public ICollection<BankAccount> BankAccounts { get; set; }
    }
}
