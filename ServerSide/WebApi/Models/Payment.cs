using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
// public virtual Microsoft.EntityFrameworkCore.Metadata.Builders.IndexBuilder  (bool unique = true);
namespace WebApi.Models
{
    public class Payment
    {
        [Key] 
        public int ID { get; set; }
        // [Index(IsUnique=true)]
        public int ContractID{ get; set; }
        public int ClientID { get; set; }
        public int NumReçus { get; set; }
        public DateTime Date { get; set; }
        public int BankID { get; set; }
        public decimal Price { get; set; }
         
       
    }
}
