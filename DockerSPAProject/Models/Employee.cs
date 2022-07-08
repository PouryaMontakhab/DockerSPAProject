using System;
using System.ComponentModel.DataAnnotations;

namespace DockerSPAProject.Models
{
    public class Employee
    {
        public Employee()
        {
            this.UniqueId = Guid.NewGuid();
        }
        [Key]
        public Guid UniqueId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
    }
}

