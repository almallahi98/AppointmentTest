using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AppointmentTest.Models
{
    [Table("Patient")]
    public partial class Patient
    {
        public Patient()
        {
            Appointments = new HashSet<Appointment>();
        }

        [Key]
        public Guid PatientId { get; set; }
        [StringLength(255)]
        [Unicode(false)]
        public string? Name { get; set; }

        [InverseProperty("Pationt")]
        public virtual ICollection<Appointment> Appointments { get; set; }
    }
}
