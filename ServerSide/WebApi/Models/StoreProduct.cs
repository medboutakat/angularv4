using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
// public virtual Microsoft.EntityFrameworkCore.Metadata.Builders.IndexBuilder  (bool unique = true);
namespace WebApi.Models
{
    public class StoreProduct
    {
        [Key] 
        public int ID { get; set; }
        // [Index(IsUnique=true)] 
        public string Code { get; set; }
        public string Name1 { get; set; }
        // [Index(IsUnique=true)]
        public string Descreption { get; set; }
        public string Price { get; set; }
        public decimal TVA { get; set; }
        // [Index(IsUnique=true)]
    }
}
