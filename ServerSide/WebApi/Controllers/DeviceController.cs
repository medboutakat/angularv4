using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using WebApi.DataStorage; 
using WebApi.TimerFeatures;
using WebApi.Hubs;
namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeviceController : ControllerBase
    {
        private readonly IHubContext<DeviceHub> _hub;

        public DeviceController(IHubContext<DeviceHub> hub)
        {
            _hub = hub;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var timerManager = new TimerManager(() => _hub.Clients.All.SendAsync("receivedevicedata", DeviceManager.GetData()));

            return Ok(new { Message = "Request Completed" });
        }
    }
}