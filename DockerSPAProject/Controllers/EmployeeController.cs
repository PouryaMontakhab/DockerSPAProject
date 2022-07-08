using System;
using DockerSPAProject.Data;
using DockerSPAProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace DockerSPAProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly MyContext _context;
        public EmployeeController(MyContext context)
        {
            this._context = context ?? throw new ArgumentNullException("context is null");
        }

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            var data = _context.Employees.ToList();
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee obj)
        {
            var data = _context.Employees.Add(obj);
            _context.SaveChanges();
            return Ok();

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Employee obj)
        {
            var data = _context.Employees.Update(obj);
            _context.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var data = _context.Employees.Where(a => a.UniqueId == id).FirstOrDefault();
            _context.Employees.Remove(data);
            _context.SaveChanges();
            return Ok();

        }
    }
}

