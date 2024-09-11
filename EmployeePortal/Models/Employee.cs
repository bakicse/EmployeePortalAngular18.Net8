using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeePortal.Models
{
    [Table("Employee")]
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Email{ get; set; }

    }
}
