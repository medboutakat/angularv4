using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class InvoiceHeader
    {
        [Key] 
        public int ID { get; set; }
        public string Code { get; set; }
        public DateTime Date { get; set; }

        private string Remark; 

        [ForeignKey("InvoiceHeaderID")]
        public ICollection<InvoiceDetail> InvoiceDetails { get; set; }
    }
}
