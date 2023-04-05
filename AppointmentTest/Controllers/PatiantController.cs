using AppointmentTest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppointmentTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatiantController : ControllerBase
    {
        private readonly APOINTContext _context;

        public PatiantController(APOINTContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> AddPatant(Patient patient)
        {
            var e = await _context.Patients.AddAsync(new Patient { PatientId = Guid.NewGuid(),Name= patient.Name });
            await _context.SaveChangesAsync();
            if (e != null)
            {

                return Ok("patient added: " + e.Entity.PatientId);
            }
            return BadRequest();
        }

        [HttpGet("/getAddPatantByDocId/{id}")]
        public async Task<IActionResult> getAddPatantByDocId(Guid id) 
        {
            var li=await _context.Appointments.Where(r => r.DocId==id).ToListAsync();
            return Ok(li);
        }
    }
}
