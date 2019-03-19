using Microsoft.AspNetCore.SignalR;
using WebApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Hubs
{
    public class DeviceHub : Hub
    {
        public async Task SendDeviceData(List<Device> data) =>
            await Clients.All.SendAsync("receivedevicedata", data);
    }
}
