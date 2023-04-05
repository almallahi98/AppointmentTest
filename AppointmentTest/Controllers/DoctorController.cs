using AppointmentTest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace AppointmentTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : Controller
    {
        private readonly APOINTContext _context;

        public DoctorController(APOINTContext context)
        {
            _context = context;
        }
        [HttpGet("getalldoc")]
        public async Task<IEnumerable<Doctor>> GetAllDoctors()
        {
            return await _context.Doctors.ToListAsync();
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> AddDoctor(string name)
        {
            var x=await _context.Doctors.AddAsync(new Doctor { DoctorName = name,DoctorId=Guid.NewGuid() });
            await _context.SaveChangesAsync();
            if (x!= null) {
                return Ok("Doctor has been added : " + name);
            }
            return BadRequest();
            
        }

        [HttpDelete("DeletDoctor/{id:guid}")]
        public async Task<IActionResult> DeletDoctor(Guid id)
        {
            _context.Doctors.Remove(new Doctor { DoctorId = id });
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
