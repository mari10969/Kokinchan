using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DotPicture1.Contollers
{
    public class HomeController : Controller
    {
        [HttpGet("/Kokinchan5")]
        public IActionResult Kokinchan5()
        {
            return this.View();
        }
        private async Task<String> GetRequestBodyText()
        {
            Request.EnableBuffering();
            Request.Body.Position = 0;
            var m = new MemoryStream();
            await Request.Body.CopyToAsync(m);
            var bb = m.ToArray();
            var text = Encoding.UTF8.GetString(bb);
            return text;
        }
    }
}
