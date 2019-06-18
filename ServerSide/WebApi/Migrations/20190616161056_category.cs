using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class category : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ClientCategorieID",
                table: "Clients",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ClientCategories",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    DateCreate = table.Column<DateTime>(nullable: false),
                    DateUpdate = table.Column<DateTime>(nullable: false),
                    Remarque = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientCategories", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Clients_ClientCategorieID",
                table: "Clients",
                column: "ClientCategorieID");

            migrationBuilder.AddForeignKey(
                name: "FK_Clients_ClientCategories_ClientCategorieID",
                table: "Clients",
                column: "ClientCategorieID",
                principalTable: "ClientCategories",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Clients_ClientCategories_ClientCategorieID",
                table: "Clients");

            migrationBuilder.DropTable(
                name: "ClientCategories");

            migrationBuilder.DropIndex(
                name: "IX_Clients_ClientCategorieID",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "ClientCategorieID",
                table: "Clients");
        }
    }
}
