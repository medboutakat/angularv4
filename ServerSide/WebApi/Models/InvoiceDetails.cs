using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class InvoiceDetail
    {
        [Key] 
        public int ID { get; set; }
        public string PCode { get; set; }
        public string Pname { get; set; }
        public string Qte { get; set; }
        public string Prix { get; set; }
        
        public int InvoiceHeaderID { get; set; }
        
    }
}
