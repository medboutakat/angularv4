  using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
// public virtual Microsoft.EntityFrameworkCore.Metadata.Builders.IndexBuilder  (bool unique = true);
namespace WebApi.Models
{
   public partial class Journal
    {   
        [Key] 
        public int ID { get; set; }
        public int JOURNAL_CLIENT_ID { get; set; }
        public int CLIENT_ID { get; set; }
        public string REFERENCE { get; set; }
        public System.DateTime JOURNAL_CLIENT_DATE { get; set; }
        public string DESCRIPTION { get; set; }
        public decimal DEBUT { get; set; }
        public decimal CREDIT { get; set; }
        public string INS_USER { get; set; }
        public Nullable<System.DateTime> INS_DATE { get; set; }
        public string UPD_USER { get; set; }
        public Nullable<System.DateTime> UPD_DATE { get; set; }
        public string LIVRAISON_REFERENCE { get; set; }
        public Nullable<int> VendorId { get; set; }
        public Nullable<decimal> Rebat { get; set; }
        public Nullable<decimal> RebatePortion { get; set; }
        public Nullable<int> mode_paiement_id { get; set; }
        public string type { get; set; }
        public bool cancled { get; set; }
        public string mode_paiementText { get; set; }
        public Nullable<bool> lock_out { get; set; }
        public Nullable<System.DateTime> lock_out_date { get; set; }
        public Nullable<int> user_id { get; set; }
        public Nullable<System.DateTime> date_echiance { get; set; }
        public int operation { get; set; }
        public string Code_client { get; set; }
        public string Client { get; set; }
        public string Mode_Paiement { get; set; }
        public string nom { get; set; }
        public string LOGIN { get; set; }
        public string TEL { get; set; }
    }
}