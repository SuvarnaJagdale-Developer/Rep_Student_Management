using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.EFCore.Migrations
{
    public partial class Address : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Students",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Room_No",
                table: "Students",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Teacher_name",
                table: "Students",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Year",
                table: "Students",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Room_No",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Teacher_name",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "Students");
        }
    }
}
