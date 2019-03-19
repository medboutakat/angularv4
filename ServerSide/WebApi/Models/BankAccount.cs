using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
namespace WebApi.Models
{
    public class BankAccount
    {
        [Key] 
        public int ID { get; set; }
        // [Index(IsUnique=true)]
        public string Code { get; set; }

        public int CountShortRIB { get; set; }

        public decimal RIB { get; set; }


        public string Remark { get; set; }
 

        public int BankID { get; set; }


    }
}
