using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
// public virtual Microsoft.EntityFrameworkCore.Metadata.Builders.IndexBuilder  (bool unique = true);
namespace WebApi.Models
{
    public class Product
    {
        [Key] 
        public int ID { get; set; }
        // [Index(IsUnique=true)]
        public string Adresse { get; set; }
        public string City { get; set; }
         public int Area { get; set; }
        // [Index(IsUnique=true)]
        public string Descreption { get; set; }
        public string Price { get; set; }
          public int TVA { get; set; }
        // [Index(IsUnique=true)]
        public int StatutID { get; set; }
        public int ProductCategorieID { get; set; }
          [ForeignKey("ProductID")]
        public ICollection<Contract> Contracts { get; set; }
    }
}
