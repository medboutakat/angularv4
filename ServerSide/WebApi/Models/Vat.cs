using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Vat
    {
        [Key] 
        public int ID { get; set; }
        public string DisplayName { get; set; }
        public double Value { get; set; } 
    }
}
