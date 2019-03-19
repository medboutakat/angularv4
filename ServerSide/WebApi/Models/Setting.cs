using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Setting
    {
        [Key] 
        public int ID { get; set; }
        public string DisplayName { get; set; }

        public string Key { get; set; }

        public string Value { get; set; } 
    }
}
