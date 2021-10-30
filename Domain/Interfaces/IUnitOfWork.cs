using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
   public interface IUnitOfWork:IDisposable
    {
        IStudentRepository Students { get; }

        Task CompleteAsync();
       // int Complete();
    }
}
