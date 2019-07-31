using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
namespace WebApi.Models
{
    public class Notification
    {
        [Key] 
        public int ID { get; set; }
        // [Index(IsUnique=true)]
        public string Info { get; set; }
        public string Name { get; set; } 
        public string Remark { get; set; }
  
    }
}
