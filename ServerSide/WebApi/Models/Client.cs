using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
// public virtual Microsoft.EntityFrameworkCore.Metadata.Builders.IndexBuilder  (bool unique = true);
namespace WebApi.Models
{
    public class Client
    {
        [Key] 
        public int ID { get; set; }
        // [Index(IsUnique=true)]
        public string Code { get; set; }
        public string Name1 { get; set; }
        public string Name2 { get; set; }
        public string Name3 { get; set; }
         
        public string Patent { get; set; } 
        public string Adresse { get; set; } 
        public string Rc { get; set; }    
        public int ClientCategorieID { get; set; } 
        [ForeignKey("ClientID")] 
        public ICollection<Contract> Contracts { get; set; }
        
    }
}
