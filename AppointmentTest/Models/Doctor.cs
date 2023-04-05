using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AppointmentTest.Models
{
    [Table("Doctor")]
    public partial class Doctor
    {
        public Doctor()
        {
            Appointments = new HashSet<Appointment>();
        }

        [Key]
        [Column("DoctorID")]
        public Guid DoctorId { get; set; }
        [StringLength(255)]
        [Unicode(false)]
        public string? DoctorName { get; set; }

        [InverseProperty("Doc")]
        public virtual ICollection<Appointment> Appointments { get; set; }
    }
}
