using System;
using DockerSPAProject.Models;
using Microsoft.EntityFrameworkCore;

namespace DockerSPAProject.Data
{
    public class MyContext : DbContext
    {
        public DbSet<Employee>? Employees {get;set;}
        public MyContext(DbContextOptions<MyContext> options):base(options)
        {

        }
    }
}

