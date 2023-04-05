using AppointmentTest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppointmentTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly APOINTContext _context;

        public AppointmentController(APOINTContext context)
        {
            _context = context;
        }
        

        [HttpGet("getAllAppointment")]
        public async Task<IActionResult> Get()
        {
            var Alist = await _context.Appointments.ToArrayAsync();
            return Ok(Alist);
        }

        [HttpPost("addNewAppointment")]
        public async Task<IActionResult> addNewAppointment(Appointment newAppointment)
        {
            int AppointmentNumber = await _context.Appointments.Where(r => r.DocId == newAppointment.DocId).CountAsync();

            if (AppointmentNumber >= 5)
            {
                return BadRequest("the doctoer is over loaded");
            }
            List<DateTime?> DocAppointList = await _context.Appointments.Where(r => r.DocId == newAppointment.DocId).Select(s => s.StartShift).ToListAsync();
            foreach (var a in DocAppointList)
            {
                if (a!.Value.Hour == newAppointment.StartShift!.Value.Hour && a.Value.Date == newAppointment.StartShift.Value.Date)
                {
                    return BadRequest("this Appointment is no longer valid");
                }
            }
            await _context.Appointments.AddAsync(new Appointment
            {
                AppointmentId = Guid.NewGuid(),
                DocId = newAppointment.DocId,
                PationtId = newAppointment.PationtId,
                StartShift = newAppointment.StartShift,
                EndShift = newAppointment.EndShift,
            });
            await _context.SaveChangesAsync();
            return Ok("new Appointment is added");
        }

        [HttpDelete("deletAppointment")]
        public async Task<IActionResult> DeletAppointment(DeletAppointmentID i) 
        {
            
            var records=await _context.Appointments.Where(r => r.AppointmentId == i.id).ToListAsync();
             _context.Appointments.RemoveRange(records);
            await _context.SaveChangesAsync();
            return Ok("record deleted");
        }
    }
}

public class DeletAppointmentID
{
    public Guid id { get; set; }
}
