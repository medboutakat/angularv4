using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
// public virtual Microsoft.EntityFrameworkCore.Metadata.Builders.IndexBuilder  (bool unique = true);
namespace WebApi.Models
{
 
    public class ClientCategory
    {
        [Key] 
        public int ID { get; set; }
        // [Index(IsUnique=true)]
        public string Name { get; set; }
        public DateTime DateCreate { get; set; }
        public DateTime DateUpdate { get; set; } 
        public string Remarque{ get; set; }
       
        [ForeignKey("ClientCategorieID")]
        public ICollection<Client> Clients { get; set; }
    }
}
