using System;
using System.Collections.Generic;
using WebApi.Models;

namespace WebApi.DataStorage
{
    public static class DeviceManager
    {
        public static List<Device> GetData()
        {
            var r = new Random();
            var temp=23;// {r.Next(-100,100)};
            var hum= 20;//{r.Next(10,90)};
            return new List<Device>
            {
                new Device
                {
                       FixTimeStamp = new DateTimeOffset(DateTime.UtcNow).ToUnixTimeSeconds(),
                        DeviceIdentifier = "99000512000299",
                        DeviceState= new List<DeviceState>(){
                        new DeviceState{
                        Temperature =temp,
                        Humidity =  hum,
                        Longitude = Convert.ToInt32("-72." + r.Next(224464416, 341194152))  ,
                        Latitude =   Convert.ToInt32("18." + r.Next(516400146, 630304598))  
                        }
                    }
                }
            };
        }
    } 
}
