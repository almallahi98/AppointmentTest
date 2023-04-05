using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AppointmentTest.Models
{
    [Table("Appointment")]
    public partial class Appointment
    {
        [Key]
        [Column("AppointmentID")]
        public Guid AppointmentId { get; set; }
        public Guid? DocId { get; set; }
        public Guid? PationtId { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? StartShift { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? EndShift { get; set; }

        [ForeignKey("DocId")]
        [InverseProperty("Appointments")]
        public virtual Doctor? Doc { get; set; }
        [ForeignKey("PationtId")]
        [InverseProperty("Appointments")]
        public virtual Patient? Pationt { get; set; }
    }
}
