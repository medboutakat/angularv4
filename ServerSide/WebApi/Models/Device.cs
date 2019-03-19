using System.Collections.Generic;

namespace WebApi.Models
{
    public class Device
    {
        public Device()
        { 
        }
        public string DeviceIdentifier { get; set; }
        public long FixTimeStamp { get; set; }
        public List<DeviceState>DeviceState { get; set; }
    }
    public class DeviceState
    {
        public int Latitude { get; set; }
        public int Longitude { get; set; }
        public double  Temperature { get; set; }
        public double Humidity { get; set; }
    }

}
