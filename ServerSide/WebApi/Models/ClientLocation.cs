using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
namespace WebApi.Models
{
    public class ClientLocation
    {
        [Key] 
        public int ID { get; set; } 
        public string Name { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
    }
}
