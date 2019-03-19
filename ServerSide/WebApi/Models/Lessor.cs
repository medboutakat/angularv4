using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Lessor
    {
        [Key] 
        public int ID { get; set; }
       
        public string FName { get; set; }
        public string LName { get; set; }

        // [ForeignKey("LessorID")]
        // public ICollection<Contract> Contracts { get; set; }
        
    }
}
