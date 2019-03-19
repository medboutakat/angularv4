using Microsoft.AspNetCore.SignalR;
using WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Hubs
{
    public class ChartHub: Hub
    {
        public async Task SendChartData(List<Chart> data) 
        => await Clients.All.SendAsync("receivechartdata", data);
    }
}
