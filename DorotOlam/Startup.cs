using DorotOlam.Models;
using DorotOlam.Models.Interface;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.IO;

namespace DorotOlam
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost", "http://www.dorotolam.com", "http://localhost:8080",
                                          "http://localhost:8100").AllowAnyHeader().AllowAnyMethod();
                                  });
            });
            services.Configure<AppSettings>(Configuration.GetSection("DorotOlam"));
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot";//"DorotOlam/dist";
            });
            services.AddSignalR();
            services.AddControllers();
            AddServices(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseRouting();
            app.UseCors();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = Path.Join(env.ContentRootPath, "DorotOlam");

                //if (env.IsDevelopment())
                //{
                //    spa.Options.SourcePath = Path.Join(env.ContentRootPath, "DorotOlam");
                //    //spa.UseAngularCliServer(npmScript: "start");
                //}
            });
        }

        private static void AddServices(IServiceCollection services)
        {
            services.AddSingleton<IDAL, DAL.DAL>();
        }
    }
}
