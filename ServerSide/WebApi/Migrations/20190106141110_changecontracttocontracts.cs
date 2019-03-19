using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class changecontracttocontracts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BankAccount_Banks_BankID",
                table: "BankAccount");

            migrationBuilder.DropForeignKey(
                name: "FK_Contract_Clients_ClientID",
                table: "Contract");

            migrationBuilder.DropForeignKey(
                name: "FK_Contract_Products_ProductID",
                table: "Contract");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Contract",
                table: "Contract");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BankAccount",
                table: "BankAccount");

            migrationBuilder.RenameTable(
                name: "Contract",
                newName: "Contracts");

            migrationBuilder.RenameTable(
                name: "BankAccount",
                newName: "BankAccounts");

            migrationBuilder.RenameIndex(
                name: "IX_Contract_ProductID",
                table: "Contracts",
                newName: "IX_Contracts_ProductID");

            migrationBuilder.RenameIndex(
                name: "IX_Contract_ClientID",
                table: "Contracts",
                newName: "IX_Contracts_ClientID");

            migrationBuilder.RenameIndex(
                name: "IX_BankAccount_BankID",
                table: "BankAccounts",
                newName: "IX_BankAccounts_BankID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Contracts",
                table: "Contracts",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BankAccounts",
                table: "BankAccounts",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_BankAccounts_Banks_BankID",
                table: "BankAccounts",
                column: "BankID",
                principalTable: "Banks",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Contracts_Clients_ClientID",
                table: "Contracts",
                column: "ClientID",
                principalTable: "Clients",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Contracts_Products_ProductID",
                table: "Contracts",
                column: "ProductID",
                principalTable: "Products",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BankAccounts_Banks_BankID",
                table: "BankAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_Contracts_Clients_ClientID",
                table: "Contracts");

            migrationBuilder.DropForeignKey(
                name: "FK_Contracts_Products_ProductID",
                table: "Contracts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Contracts",
                table: "Contracts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BankAccounts",
                table: "BankAccounts");

            migrationBuilder.RenameTable(
                name: "Contracts",
                newName: "Contract");

            migrationBuilder.RenameTable(
                name: "BankAccounts",
                newName: "BankAccount");

            migrationBuilder.RenameIndex(
                name: "IX_Contracts_ProductID",
                table: "Contract",
                newName: "IX_Contract_ProductID");

            migrationBuilder.RenameIndex(
                name: "IX_Contracts_ClientID",
                table: "Contract",
                newName: "IX_Contract_ClientID");

            migrationBuilder.RenameIndex(
                name: "IX_BankAccounts_BankID",
                table: "BankAccount",
                newName: "IX_BankAccount_BankID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Contract",
                table: "Contract",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BankAccount",
                table: "BankAccount",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_BankAccount_Banks_BankID",
                table: "BankAccount",
                column: "BankID",
                principalTable: "Banks",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Contract_Clients_ClientID",
                table: "Contract",
                column: "ClientID",
                principalTable: "Clients",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Contract_Products_ProductID",
                table: "Contract",
                column: "ProductID",
                principalTable: "Products",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
