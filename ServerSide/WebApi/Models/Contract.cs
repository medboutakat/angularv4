using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
// public virtual Microsoft.EntityFrameworkCore.Metadata.Builders.IndexBuilder  (bool unique = true);
namespace WebApi.Models
{
    public class Contract
    {
        [Key] 
        public int ID { get; set; }
        // [Index(IsUnique=true)]
        public string Price { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime PaymentDate { get; set; }
         
        public string Tax { get; set; } 
        public string Description { get; set; } 
        // public string PaymentMode { get; set; } 
        public int LessorID { get; set; }
         
        public int ClientID { get; set; } 
        public int BankID { get; set; } 
        public int ProductID { get; set; } 
    }
}
