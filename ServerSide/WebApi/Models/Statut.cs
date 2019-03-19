using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
namespace WebApi.Models
{
    public class Statut
    {
        [Key] 
        public int ID { get; set; }
        // [Index(IsUnique=true)]
        public string Libelle { get; set; }
        public string Remarque { get; set; }

       
 
 
        [ForeignKey("StatutID")]
        public ICollection<Product> Products { get; set; }
    }
}
