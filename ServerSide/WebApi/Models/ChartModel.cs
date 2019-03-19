using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Chart
    {
        public List<int> Data { get; set; }
        public string Label { get; set; }

        public Chart()
        {
            Data = new List<int>();
        }
    }
}
