using System;
using System.Collections.Generic;
using System.Text;
using Domain.Interfaces;
using Domain.Domain;
using Microsoft.EntityFrameworkCore;
using DataAccess.EFCore.Repositories;
using System.Threading.Tasks;

namespace DataAccess.EFCore.UnitOfWork
{
    public class UnitOfWork :IUnitOfWork
    {
        private readonly ApplicationContext _context;
        public UnitOfWork(ApplicationContext context)
        {
           _context = context;
            Students = new StudentRepository(_context);
          
        }
        public IStudentRepository Students { get; private set; }
       
        //public int Complete()
        //{
        //    return _context.SaveChanges();
        //}

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }
        public void Dispose()
        {
            _context.Dispose();
        }

    }
}
