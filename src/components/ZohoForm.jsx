import React from "react";
import PropTypes from "prop-types";

// import "./HedgZohoForm.html"

const regex = /^\s+|\s+$/g;

const zohoStringEN = `
<!-- Note :
   - You can modify the font style and form style to suit your website. 
   - Code lines with comments ���Do not remove this code���  are required for the form to work properly, make sure that you do not remove these lines of code. 
   - The Mandatory check script can modified as to suit your business needs. 
   - It is important that you test the modified form before going live.-->
<div id='crmWebToEntityForm' style='width:600px;margin:auto;'>
   <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
   <form action='https://platform.zoho.com/crm/WebToLeadForm' name=WebToLeads4480440000000247031 method='POST' enctype='multipart/form-data' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory4480440000000247031()' accept-charset='UTF-8'>
 <input type='text' style='display:none;' name='xnQsjsdp' value='38ba8f6255d2c5eebbda5a355596913ad288491f48f84f5c2b25518a3aba30da'></input> 
 <input type='hidden' name='zc_gad' id='zc_gad' value=''></input> 
 <input type='text' style='display:none;' name='xmIwtLD' value='1f76f2aed5ba4fcb9d24a9bf427b4c849bcd05a5966f1e75f24147cbb04d147b'></input> 
 <input type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
 <input type='text' style='display:none;' name='returnURL' value='https://www.hedg.ca/' > </input><br></br>
	 <!-- Do not remove this code. -->
	<style>
		#crmWebToEntityForm tr , #crmWebToEntityForm td { 
			padding:6px;
			border-spacing:0px;
			border-width:0px;
			}
	</style>
	<table style='width:600px;background-color:#ffffff;background-color:white;color:black'><tr><td colspan='2' align='left' style='color:black;font-family:Verdana;font-size:14px;word-break: break-word;'><strong>Please submit your referral.</strong></td></tr> <br></br><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Who is referring this lead?<span style='color:red;'>*</span></td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='255' name='LEADCF155' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Please enter your name &#x28;name of the mortgage broker referring this lead to Hedg&#x29;' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Client Last Name<span style='color:red;'>*</span></td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='80' name='Last Name' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Please enter the last name of your client to be contacted by Hedg.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Client First Name<span style='color:red;'>*</span></td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='40' name='First Name' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Please enter the first name of your client to be contacted by Hedg.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Phone<span style='color:red;'>*</span></td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='30' name='Phone' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Primary phone to contact your client.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Email</td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='100' name='Email' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Please enter the client email to be used for contact by Hedg.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Document Language</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='LEADCF22'>
			<option value='-None-'>-None-</option>
			<option value='English'>English</option>
			<option value='Francais'>Francais</option>
		</select></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='What language does your client prefer for business&#x3f;  &#x28;English or French&#x29;' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Mortgage</td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='255' name='LEADCF17' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Please enter the total mortgage amount.  Please attach any client documents below.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Referral Notes </td><td style='width:40%;'> <textarea name='LEADCF12' maxlength='32000' style='width:100%;'>&nbsp;</textarea></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Enter any notes for this referral, such as best contacting details or particular needs.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td style='nowrap:nowrap;text-align:right;font-size:12px;font-family:Verdana;width:30%;box-sizing:border-box;'>Upload a File</td>
	    <td style='padding-top: 10px;width:40%;box-sizing:border-box;'><input type='file' name='theFile' id='theFile' multiple style='width:100%;box-sizing:border-box;'/><p style='color:black;font-size:11px;padding-left:3px;'>File(s) size limit is 20MB.</p></td>
	<td style='width:30%;vertical-align: bottom;'><span title='Please attach up to 3 documents here, up to 20MB &#x28;Mortgage documents, etc.&#x29;' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td>
	</tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Company</td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='100' name='Company' value='Account&#x20;Name&#x20;-&#x20;To&#x20;Be&#x20;Updated'></input></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Country</td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='100' name='Country' value='Canada'></input></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Lead Status</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='Lead Status'>
			<option value='-None-'>-None-</option>
		<option selected value='Attempt&#x20;to&#x20;Contact'>Attempt to Contact</option>
			<option value='Awaiting&#x20;Reply'>Awaiting Reply</option>
			<option value='Began&#x20;Talking'>Began Talking</option>
			<option value='Convert&#x20;to&#x20;Client'>Convert to Client</option>
			<option value='Inactive&#x20;Lead'>Inactive Lead</option>
			<option value='Junk&#x20;Lead'>Junk Lead</option>
			<option value='Lost&#x20;Lead'>Lost Lead</option>
			<option value='Not&#x20;Qualified'>Not Qualified</option>
		</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Lead Sub-Region</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='LEADCF161'>
		<option selected value='Select&#x20;Sub-Region'>Select Sub-Region</option>
			<option value='-None-'>-None-</option>
			<option value='Ahuntsic'>Ahuntsic</option>
			<option value='Anjou'>Anjou</option>
			<option value='Assomption'>Assomption</option>
			<option value='Baie-d&#x27;Urfe'>Baie-d&#x27;Urfe</option>
			<option value='Beaconsfield'>Beaconsfield</option>
			<option value='Beloeil'>Beloeil</option>
			<option value='Blainville'>Blainville</option>
			<option value='Boisbriand'>Boisbriand</option>
			<option value='Bois-des-Filion'>Bois-des-Filion</option>
			<option value='Boucherville'>Boucherville</option>
			<option value='Brossard'>Brossard</option>
			<option value='Candiac'>Candiac</option>
			<option value='Carignan'>Carignan</option>
			<option value='Cartierville'>Cartierville</option>
			<option value='Chambly'>Chambly</option>
			<option value='Charlemagne'>Charlemagne</option>
			<option value='Chateauguay'>Chateauguay</option>
			<option value='Cote-des-Nieges'>Cote-des-Nieges</option>
			<option value='Cote-Saint-Luc'>Cote-Saint-Luc</option>
			<option value='Delson'>Delson</option>
			<option value='Deux-Montagnes'>Deux-Montagnes</option>
			<option value='Dollard-des-Ormeaux&#x20;DDO'>Dollard-des-Ormeaux DDO</option>
			<option value='Dorval'>Dorval</option>
			<option value='Epiphanie'>Epiphanie</option>
			<option value='Hampstead'>Hampstead</option>
			<option value='Hochelaga'>Hochelaga</option>
			<option value='Ile-Bizard'>Ile-Bizard</option>
			<option value='Ile-des-Souers&#x20;-&#x20;Nun&#x27;s&#x20;Island'>Ile-des-Souers - Nun&#x27;s Island</option>
			<option value='Ile-Perrot'>Ile-Perrot</option>
			<option value='Kirkland'>Kirkland</option>
			<option value='La&#x20;Prairie'>La Prairie</option>
			<option value='Lachine'>Lachine</option>
			<option value='Lasalle'>Lasalle</option>
			<option value='Laval'>Laval</option>
			<option value='Laval&#x20;&#x28;Auteuil&#x29;'>Laval &#x28;Auteuil&#x29;</option>
			<option value='Laval&#x20;&#x28;Chomedey&#x29;'>Laval &#x28;Chomedey&#x29;</option>
			<option value='Laval&#x20;&#x28;Duvernay&#x29;'>Laval &#x28;Duvernay&#x29;</option>
			<option value='Laval&#x20;&#x28;Fabreville&#x29;'>Laval &#x28;Fabreville&#x29;</option>
			<option value='Laval&#x20;&#x28;Iles&#x20;Laval&#x29;'>Laval &#x28;Iles Laval&#x29;</option>
			<option value='Laval&#x20;&#x28;Laval-des-Rapides&#x29;'>Laval &#x28;Laval-des-Rapides&#x29;</option>
			<option value='Laval&#x20;&#x28;Laval-Ouest&#x29;'>Laval &#x28;Laval-Ouest&#x29;</option>
			<option value='Laval&#x20;&#x28;Laval-sur-le-Lac&#x29;'>Laval &#x28;Laval-sur-le-Lac&#x29;</option>
			<option value='Laval&#x20;&#x28;Pont-Viau&#x29;'>Laval &#x28;Pont-Viau&#x29;</option>
			<option value='Laval&#x20;&#x28;Sainte-Dorothee&#x29;'>Laval &#x28;Sainte-Dorothee&#x29;</option>
			<option value='Laval&#x20;&#x28;Saint-Martin&#x29;'>Laval &#x28;Saint-Martin&#x29;</option>
			<option value='Laval&#x20;&#x28;Sainte-Rose&#x29;'>Laval &#x28;Sainte-Rose&#x29;</option>
			<option value='Laval&#x20;&#x28;Saint-Francois&#x29;'>Laval &#x28;Saint-Francois&#x29;</option>
			<option value='Laval&#x20;&#x28;Saint-Vincent-de-Paul&#x29;'>Laval &#x28;Saint-Vincent-de-Paul&#x29;</option>
			<option value='Laval&#x20;&#x28;Vimont&#x29;'>Laval &#x28;Vimont&#x29;</option>
			<option value='Longueuil'>Longueuil</option>
			<option value='Longueuil&nbsp;&#x28;Greenfield&#x20;Park&#x29;'>Longueuil&nbsp;&#x28;Greenfield Park&#x29;</option>
			<option value='Longueuil&nbsp;&#x28;Saint-Hubert&#x29;'>Longueuil&nbsp;&#x28;Saint-Hubert&#x29;</option>
			<option value='Longueuil&nbsp;&#x28;Vieux-longueuil&#x29;'>Longueuil&nbsp;&#x28;Vieux-longueuil&#x29;</option>
			<option value='Lorraine'>Lorraine</option>
			<option value='Mascouche'>Mascouche</option>
			<option value='McMasterville'>McMasterville</option>
			<option value='Mirabel'>Mirabel</option>
			<option value='Montreal-Est'>Montreal-Est</option>
			<option value='Montreal-Nord'>Montreal-Nord</option>
			<option value='Montreal-Ouest&#x20;-&#x20;Montreal&#x20;West'>Montreal-Ouest - Montreal West</option>
			<option value='Mont-Royal&#x20;TMR'>Mont-Royal TMR</option>
			<option value='Mont-Saint-Hilaire'>Mont-Saint-Hilaire</option>
			<option value='Notre-dame-de-Grace&#x20;NDG'>Notre-dame-de-Grace NDG</option>
			<option value='Oka'>Oka</option>
			<option value='Otterburn&#x20;Park'>Otterburn Park</option>
			<option value='Outremont'>Outremont</option>
			<option value='Parc-Extension'>Parc-Extension</option>
			<option value='Petite-Patrie'>Petite-Patrie</option>
			<option value='Pierrefonds'>Pierrefonds</option>
			<option value='Plateau&#x20;Mt-Royal'>Plateau Mt-Royal</option>
			<option value='Pointe-aux-Trembles'>Pointe-aux-Trembles</option>
			<option value='Pointe-Calumet'>Pointe-Calumet</option>
			<option value='Pointe-Claire'>Pointe-Claire</option>
			<option value='Pointe-Saint-Charles'>Pointe-Saint-Charles</option>
			<option value='Repentigny'>Repentigny</option>
			<option value='Riviere-des-Prairies'>Riviere-des-Prairies</option>
			<option value='Rosemere'>Rosemere</option>
			<option value='Rosemont'>Rosemont</option>
			<option value='Saint-Basile-le-Grand'>Saint-Basile-le-Grand</option>
			<option value='Saint-Bruno-de-Montarville'>Saint-Bruno-de-Montarville</option>
			<option value='Saint-Constant'>Saint-Constant</option>
			<option value='Sainte-Anne-des-Plaines'>Sainte-Anne-des-Plaines</option>
			<option value='Sainte-Catherine'>Sainte-Catherine</option>
			<option value='Sainte-Julie'>Sainte-Julie</option>
			<option value='Sainte-Marthe-sur-le-Lac'>Sainte-Marthe-sur-le-Lac</option>
			<option value='Sainte-Therese'>Sainte-Therese</option>
			<option value='Saint-Eustache'>Saint-Eustache</option>
			<option value='Saint-Isidore'>Saint-Isidore</option>
			<option value='Saint-Joseph-du-Lac'>Saint-Joseph-du-Lac</option>
			<option value='Saint-Lambert'>Saint-Lambert</option>
			<option value='Saint-Laurent'>Saint-Laurent</option>
			<option value='Saint-Leonard'>Saint-Leonard</option>
			<option value='Saint-Philippe'>Saint-Philippe</option>
			<option value='Saint-Sulpice'>Saint-Sulpice</option>
			<option value='St-Jerome'>St-Jerome</option>
			<option value='Sud-Ouest&#x20;-&#x20;South&#x20;West'>Sud-Ouest - South West</option>
			<option value='Terrebonne'>Terrebonne</option>
			<option value='Varennes'>Varennes</option>
			<option value='Verdun'>Verdun</option>
			<option value='Ville-Marie&#x20;Downtown'>Ville-Marie Downtown</option>
			<option value='Villeray'>Villeray</option>
			<option value='Westmount'>Westmount</option>
			<option value='Abitibi&#x20;&#x28;Amos&#x20;Region&#x29;'>Abitibi &#x28;Amos Region&#x29;</option>
			<option value='Abitibi&#x20;&#x28;La&#x20;Sarre&#x20;Region&#x29;'>Abitibi &#x28;La Sarre Region&#x29;</option>
			<option value='Abitibi&#x20;&#x28;Rouyn-Noranda&#x20;Region&#x29;'>Abitibi &#x28;Rouyn-Noranda Region&#x29;</option>
			<option value='Abitibi&#x20;&#x28;Val-d&#x27;Or&#x20;Region&#x29;'>Abitibi &#x28;Val-d&#x27;Or Region&#x29;</option>
			<option value='Abitibi&#x20;&#x28;Ville-Marie&#x20;Region&#x29;'>Abitibi &#x28;Ville-Marie Region&#x29;</option>
			<option value='Bas&#x20;St-Laurent&#x20;&#x28;Rimouski&#x20;Region&#x29;'>Bas St-Laurent &#x28;Rimouski Region&#x29;</option>
			<option value='Bas&#x20;St-Laurent&#x20;&#x28;Matane&#x20;Region&#x29;'>Bas St-Laurent &#x28;Matane Region&#x29;</option>
			<option value='Bas&#x20;St-Laurent&#x20;&#x28;Riviere-du-Loup&#x20;Region&#x29;'>Bas St-Laurent &#x28;Riviere-du-Loup Region&#x29;</option>
			<option value='Quebec&#x20;City&#x20;Region'>Quebec City Region</option>
			<option value='Cap.&#x20;Nat.&#x20;&#x28;Beaupre&#x20;Region&#x29;'>Cap. Nat. &#x28;Beaupre Region&#x29;</option>
			<option value='Cap.&#x20;Nat.&#x20;&#x28;Charlevoix&#x20;Region&#x29;'>Cap. Nat. &#x28;Charlevoix Region&#x29;</option>
			<option value='Cap.&#x20;Nat.&#x20;&#x28;Portneuf&#x20;Region&#x29;'>Cap. Nat. &#x28;Portneuf Region&#x29;</option>
			<option value='Centre-du-QC&#x20;&#x28;Becancour&#x20;Region&#x29;'>Centre-du-QC &#x28;Becancour Region&#x29;</option>
			<option value='Centre-du-QC&#x20;&#x28;Drummondville&#x20;Region&#x29;'>Centre-du-QC &#x28;Drummondville Region&#x29;</option>
			<option value='Centre-du-QC&#x20;&#x28;Nicolet&#x20;Region&#x29;'>Centre-du-QC &#x28;Nicolet Region&#x29;</option>
			<option value='Centre-du-QC&#x20;&#x28;Victoriaville&#x20;Region&#x29;'>Centre-du-QC &#x28;Victoriaville Region&#x29;</option>
			<option value='Chaudiere-Appalaches&#x20;&#x28;Levis&#x20;Region&#x29;'>Chaudiere-Appalaches &#x28;Levis Region&#x29;</option>
			<option value='Chaudiere-Appalaches&#x20;&#x28;Montmagny&#x20;Region&#x29;'>Chaudiere-Appalaches &#x28;Montmagny Region&#x29;</option>
			<option value='Chaudiere-Appalaches&#x20;&#x28;St-Georges&#x20;Region&#x29;'>Chaudiere-Appalaches &#x28;St-Georges Region&#x29;</option>
			<option value='Chaudiere-Appalaches&#x20;&#x28;Thetford&#x20;Mines&#x20;Region&#x29;'>Chaudiere-Appalaches &#x28;Thetford Mines Region&#x29;</option>
			<option value='Cote-Nord&#x20;&#x28;Baie-Comeau&#x20;Region&#x29;'>Cote-Nord &#x28;Baie-Comeau Region&#x29;</option>
			<option value='Cote-Nord&#x20;&#x28;Sept-Iles&#x20;Region&#x29;'>Cote-Nord &#x28;Sept-Iles Region&#x29;</option>
			<option value='Estrie&#x20;&#x28;Asbestos&#x20;Region&#x29;'>Estrie &#x28;Asbestos Region&#x29;</option>
			<option value='Estrie&#x20;&#x28;Granby,&#x20;Cowansville&#x20;Region&#x29;'>Estrie &#x28;Granby, Cowansville Region&#x29;</option>
			<option value='Estrie&#x20;&#x28;Lac-Megantic&#x20;Region&#x29;'>Estrie &#x28;Lac-Megantic Region&#x29;</option>
			<option value='Estrie&#x20;&#x28;Sherbrooke&#x20;Region&#x29;'>Estrie &#x28;Sherbrooke Region&#x29;</option>
			<option value='Gaspesie&#x20;&#x28;Baie-des-Chaleurs&#x20;Region&#x29;'>Gaspesie &#x28;Baie-des-Chaleurs Region&#x29;</option>
			<option value='Gaspesie&#x20;&#x28;Gaspe&#x20;Region&#x29;'>Gaspesie &#x28;Gaspe Region&#x29;</option>
			<option value='Gaspesie&#x20;&#x28;Ste-Anne&#x20;Region&#x29;'>Gaspesie &#x28;Ste-Anne Region&#x29;</option>
			<option value='Gaspesie&#x20;&#x28;Iles-de-la-Madeleine&#x29;'>Gaspesie &#x28;Iles-de-la-Madeleine&#x29;</option>
			<option value='Lanaudiere&#x20;&#x28;Rive&#x20;Nord&#x29;'>Lanaudiere &#x28;Rive Nord&#x29;</option>
			<option value='Lanaudiere&#x20;&#x28;Basse,&#x20;Joliette&#x20;Region&#x29;'>Lanaudiere &#x28;Basse, Joliette Region&#x29;</option>
			<option value='Lanaudiere&#x20;&#x28;Moyenne,&#x20;Rawdon&#x20;Region&#x29;'>Lanaudiere &#x28;Moyenne, Rawdon Region&#x29;</option>
			<option value='Lanaudiere&#x20;&#x28;Haute,&#x20;Montcalm&#x20;Region&#x29;'>Lanaudiere &#x28;Haute, Montcalm Region&#x29;</option>
			<option value='Laurentides&#x20;&#x28;Rive&#x20;Nord&#x29;'>Laurentides &#x28;Rive Nord&#x29;</option>
			<option value='Laurentides&#x20;&#x28;Moyenne,&#x20;Coeur-des-Laurentides&#x20;Region&#x29;'>Laurentides &#x28;Moyenne, Coeur-des-Laurentides Region&#x29;</option>
			<option value='Laurentides&#x20;&#x28;Hautes,&#x20;Mt-Laurier&#x20;Region&#x29;'>Laurentides &#x28;Hautes, Mt-Laurier Region&#x29;</option>
			<option value='Laurentides&#x20;&#x28;La&#x20;Chute&#x20;Region&#x29;'>Laurentides &#x28;La Chute Region&#x29;</option>
			<option value='Mauricie&#x20;&#x28;Basse,&#x20;Trois-Rivieres&#x20;Region&#x29;'>Mauricie &#x28;Basse, Trois-Rivieres Region&#x29;</option>
			<option value='Mauricie&#x20;&#x28;Moyenne,&#x20;Shawinigan&#x20;Region&#x29;'>Mauricie &#x28;Moyenne, Shawinigan Region&#x29;</option>
			<option value='Mauricie&#x20;&#x28;Haute,&#x20;La&#x20;Tuque&nbsp;Region&#x29;'>Mauricie &#x28;Haute, La Tuque&nbsp;Region&#x29;</option>
			<option value='Monteregie&#x20;&#x28;Rive&#x20;Sud&#x29;'>Monteregie &#x28;Rive Sud&#x29;</option>
			<option value='Monteregie&#x20;&#x28;10E,&#x20;Chambly&#x20;&amp;&#x20;St-Jean-sur-Richelieu&#x20;Region&#x29;'>Monteregie &#x28;10E, Chambly &amp; St-Jean-sur-Richelieu Region&#x29;</option>
			<option value='Monteregie&#x20;&#x28;15S,&#x20;Napierville&#x20;Region&#x29;'>Monteregie &#x28;15S, Napierville Region&#x29;</option>
			<option value='Monteregie&#x20;&#x28;20E,&#x20;St-Hyacinthe&#x20;&amp;&#x20;Sorel&#x20;Region&#x29;'>Monteregie &#x28;20E, St-Hyacinthe &amp; Sorel Region&#x29;</option>
			<option value='Monteregie&#x20;&#x28;40W,&#x20;Vaudreuil&#x20;Region&#x29;'>Monteregie &#x28;40W, Vaudreuil Region&#x29;</option>
			<option value='Monteregie&#x20;&#x28;Pont&#x20;Mercier,&#x20;Chateauguay&#x20;Region&#x29;'>Monteregie &#x28;Pont Mercier, Chateauguay Region&#x29;</option>
			<option value='Nord-du-Quebec&#x20;&#x28;Eeyou&#x20;Istchee&#x29;'>Nord-du-Quebec &#x28;Eeyou Istchee&#x29;</option>
			<option value='Nord-du-Quebec&#x20;&#x28;Jamesie&#x29;'>Nord-du-Quebec &#x28;Jamesie&#x29;</option>
			<option value='Nord-du-Quebec&#x20;&#x28;Kativik&#x29;'>Nord-du-Quebec &#x28;Kativik&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Gatineau&#x29;'>Outaouais &#x28;Gatineau&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Gatineau&#x20;-&#x20;Aylmer&#x29;'>Outaouais &#x28;Gatineau - Aylmer&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Gatineau&#x20;-&#x20;Buckingham&#x29;'>Outaouais &#x28;Gatineau - Buckingham&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Gatineau&#x20;-&#x20;Hull&#x29;'>Outaouais &#x28;Gatineau - Hull&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Collines-de-l&#x27;Outaouais,&#x20;Chelsea&#x20;Region&#x29;'>Outaouais &#x28;Collines-de-l&#x27;Outaouais, Chelsea Region&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Papineau&#x20;Region&#x29;'>Outaouais &#x28;Papineau Region&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Pontiac&#x20;Region&#x29;'>Outaouais &#x28;Pontiac Region&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Vallee-de-la-Gatineau,&#x20;Maniwaki&#x20;Region&#x29;'>Outaouais &#x28;Vallee-de-la-Gatineau, Maniwaki Region&#x29;</option>
			<option value='Saguenay&#x20;&#x28;Lac-Saint-Jean&#x20;Region&#x29;'>Saguenay &#x28;Lac-Saint-Jean Region&#x29;</option>
			<option value='Saguenay&#x20;&#x28;Ville&#x20;Saguenay&#x20;Region&#x29;'>Saguenay &#x28;Ville Saguenay Region&#x29;</option>
			<option value='&#x3a;&#x3a;__'>&#x3a;&#x3a;__</option>
			<option value='Ajax'>Ajax</option>
			<option value='Aurora'>Aurora</option>
			<option value='Brampton'>Brampton</option>
			<option value='Brock'>Brock</option>
			<option value='Burlington'>Burlington</option>
			<option value='Caledon'>Caledon</option>
			<option value='Clarington'>Clarington</option>
			<option value='East&#x20;Gwillimbury'>East Gwillimbury</option>
			<option value='East&#x20;York'>East York</option>
			<option value='Etobicoke'>Etobicoke</option>
			<option value='Georgina'>Georgina</option>
			<option value='Halton&#x20;Hills'>Halton Hills</option>
			<option value='King'>King</option>
			<option value='Markham'>Markham</option>
			<option value='Milton'>Milton</option>
			<option value='Mississauga'>Mississauga</option>
			<option value='Newmarket'>Newmarket</option>
			<option value='North&#x20;York'>North York</option>
			<option value='Oakville'>Oakville</option>
			<option value='Oshawa'>Oshawa</option>
			<option value='Pickering'>Pickering</option>
			<option value='Richmond&#x20;Hill'>Richmond Hill</option>
			<option value='Scarborough'>Scarborough</option>
			<option value='Scugog'>Scugog</option>
			<option value='Toronto&#x20;Downtown'>Toronto Downtown</option>
			<option value='Uxbridge'>Uxbridge</option>
			<option value='Vaughan'>Vaughan</option>
			<option value='Whitby'>Whitby</option>
			<option value='Whitchurch-Stouffville'>Whitchurch-Stouffville</option>
			<option value='York'>York</option>
			<option value='Algonquin&#x20;&#x28;Bancroft&#x20;Region&#x29;'>Algonquin &#x28;Bancroft Region&#x29;</option>
			<option value='Algonquin&#x20;&#x28;Huntsville&#x20;Region&#x29;'>Algonquin &#x28;Huntsville Region&#x29;</option>
			<option value='Algonquin&#x20;&#x28;North&#x20;Bay&#x20;Region&#x29;'>Algonquin &#x28;North Bay Region&#x29;</option>
			<option value='Algonquin&#x20;&#x28;Pembroke&#x20;Region&#x29;'>Algonquin &#x28;Pembroke Region&#x29;</option>
			<option value='East&#x20;Ontario&#x20;&#x28;Brockville&#x20;Region&#x29;'>East Ontario &#x28;Brockville Region&#x29;</option>
			<option value='East&#x20;Ontario&#x20;&#x28;Casselman&#x20;Region&#x29;'>East Ontario &#x28;Casselman Region&#x29;</option>
			<option value='East&#x20;Ontario&#x20;&#x28;Cornwall&#x20;Region&#x29;'>East Ontario &#x28;Cornwall Region&#x29;</option>
			<option value='East&#x20;Ontario&#x20;&#x28;Hawkesbury&#x20;Region&#x29;'>East Ontario &#x28;Hawkesbury Region&#x29;</option>
			<option value='Georgian&#x20;Triangle&#x20;&#x28;Barrie&#x20;Region&#x29;'>Georgian Triangle &#x28;Barrie Region&#x29;</option>
			<option value='Georgian&#x20;Triangle&#x20;&#x28;Gravenhurst&#x20;Region&#x29;'>Georgian Triangle &#x28;Gravenhurst Region&#x29;</option>
			<option value='Georgian&#x20;Triangle&#x20;&#x28;Owen&#x20;Sound&#x20;Region&#x29;'>Georgian Triangle &#x28;Owen Sound Region&#x29;</option>
			<option value='Hamilton'>Hamilton</option>
			<option value='Hamilton&#x20;&#x28;Brantford&#x20;Region&#x29;'>Hamilton &#x28;Brantford Region&#x29;</option>
			<option value='Hamilton&#x20;&#x28;Kitchener&#x20;Region&#x29;'>Hamilton &#x28;Kitchener Region&#x29;</option>
			<option value='Hamilton&#x20;&#x28;Niagara&#x20;Region&#x29;'>Hamilton &#x28;Niagara Region&#x29;</option>
			<option value='Kingston'>Kingston</option>
			<option value='Kingston&#x20;&#x28;Belleville&#x20;Region&#x29;'>Kingston &#x28;Belleville Region&#x29;</option>
			<option value='Kingston&#x20;&#x28;Madoc&#x20;Region&#x29;'>Kingston &#x28;Madoc Region&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Central&#x29;'>Ottawa &#x28;Central&#x29;</option>
			<option value='Ottawa&#x20;&#x28;East&#x20;End&#x29;'>Ottawa &#x28;East End&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Gloucester&#x29;'>Ottawa &#x28;Gloucester&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Kanata&#x29;'>Ottawa &#x28;Kanata&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Kempville&#x20;Region&#x29;'>Ottawa &#x28;Kempville Region&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Nepean&#x29;'>Ottawa &#x28;Nepean&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Orleans&#x29;'>Ottawa &#x28;Orleans&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Rockland&#x20;Region&#x29;'>Ottawa &#x28;Rockland Region&#x29;</option>
			<option value='Ottawa&#x20;&#x28;South&#x20;End&#x29;'>Ottawa &#x28;South End&#x29;</option>
			<option value='Ottawa&#x20;&#x28;West&#x20;End&#x29;'>Ottawa &#x28;West End&#x29;</option>
			<option value='Ottawa&#x20;-&#x20;Cumberland&#x20;Township'>Ottawa - Cumberland Township</option>
			<option value='Ottawa&#x20;-&#x20;Goulbourn&#x20;Township'>Ottawa - Goulbourn Township</option>
			<option value='Ottawa&#x20;-&#x20;Osgoode&#x20;Township'>Ottawa - Osgoode Township</option>
			<option value='Ottawa&#x20;-&#x20;Rideau&#x20;Township'>Ottawa - Rideau Township</option>
			<option value='Ottawa&#x20;-&#x20;West&#x20;Carleton&#x20;Township'>Ottawa - West Carleton Township</option>
			<option value='Peterborough'>Peterborough</option>
			<option value='Peterborough&#x20;&#x28;Cobourg&#x20;Region&#x29;'>Peterborough &#x28;Cobourg Region&#x29;</option>
			<option value='Peterborough&#x20;&#x28;Lindsay&#x20;Region&#x29;'>Peterborough &#x28;Lindsay Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;Chatham&#x20;Region&#x29;'>SW Ontario &#x28;Chatham Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;Goderich&#x20;Region&#x29;'>SW Ontario &#x28;Goderich Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;London&#x20;Region&#x29;'>SW Ontario &#x28;London Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;Sarnia&#x20;&#x20;Region&#x29;'>SW Ontario &#x28;Sarnia  Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;Tillsonburg&#x20;Region&#x29;'>SW Ontario &#x28;Tillsonburg Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;Windsor&#x20;Region&#x29;'>SW Ontario &#x28;Windsor Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Far&#x20;North&#x20;Region&#x29;'>Northern Ontario &#x28;Far North Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Kenora&#x20;Region&#x29;'>Northern Ontario &#x28;Kenora Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Sault&#x20;Ste&#x20;Marie&#x20;Region&#x29;'>Northern Ontario &#x28;Sault Ste Marie Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Sudbury&#x20;Region&#x29;'>Northern Ontario &#x28;Sudbury Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Thunder&#x20;Bay&#x20;Region&#x29;'>Northern Ontario &#x28;Thunder Bay Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Timmins&#x20;Region&#x29;'>Northern Ontario &#x28;Timmins Region&#x29;</option>
			<option value='&#x3a;&#x3a;___'>&#x3a;&#x3a;___</option>
			<option value='Bathurst'>Bathurst</option>
			<option value='Campbellton'>Campbellton</option>
			<option value='Edmundston'>Edmundston</option>
			<option value='Fredericton'>Fredericton</option>
			<option value='Miramichi'>Miramichi</option>
			<option value='Moncton'>Moncton</option>
			<option value='Saint&#x20;John,&#x20;NB'>Saint John, NB</option>
			<option value='&#x3a;&#x3a;____'>&#x3a;&#x3a;____</option>
			<option value='Gander'>Gander</option>
			<option value='St-John&#x27;s,&#x20;NL'>St-John&#x27;s, NL</option>
			<option value='Corner&#x20;Brook'>Corner Brook</option>
			<option value='Churchill&#x20;Falls'>Churchill Falls</option>
			<option value='Happy&#x20;Valley-Goose&#x20;Bay'>Happy Valley-Goose Bay</option>
			<option value='Labrador&#x20;City'>Labrador City</option>
			<option value='&#x3a;&#x3a;_____'>&#x3a;&#x3a;_____</option>
			<option value='Annapolis&#x20;Royal'>Annapolis Royal</option>
			<option value='Sydney'>Sydney</option>
			<option value='Guysborough'>Guysborough</option>
			<option value='Truro'>Truro</option>
			<option value='Halifax'>Halifax</option>
			<option value='Pictou'>Pictou</option>
			<option value='Lunenburg'>Lunenburg</option>
			<option value='Yarmouth'>Yarmouth</option>
			<option value='&#x3a;&#x3a;______'>&#x3a;&#x3a;______</option>
			<option value='Summerside'>Summerside</option>
			<option value='Charlottetown'>Charlottetown</option>
			<option value='&#x3a;&#x3a;_______'>&#x3a;&#x3a;_______</option>
			<option value='Yellowknife'>Yellowknife</option>
			<option value='&#x3a;&#x3a;________'>&#x3a;&#x3a;________</option>
			<option value='Iqaluit'>Iqaluit</option>
			<option value='Whitehorse'>Whitehorse</option>
			<option value='&#x3a;&#x3a;_________'>&#x3a;&#x3a;_________</option>
			<option value='Athabasca'>Athabasca</option>
			<option value='Cold&#x20;Lake'>Cold Lake</option>
			<option value='Banff'>Banff</option>
			<option value='Canmore'>Canmore</option>
			<option value='Lake&#x20;Louise'>Lake Louise</option>
			<option value='Airdrie'>Airdrie</option>
			<option value='Beiseker'>Beiseker</option>
			<option value='Black&#x20;Diamond'>Black Diamond</option>
			<option value='Calgary&#x20;NE'>Calgary NE</option>
			<option value='Calgary&#x20;NW'>Calgary NW</option>
			<option value='Calgary&#x20;SE'>Calgary SE</option>
			<option value='Calgary&#x20;SW'>Calgary SW</option>
			<option value='Chestermere'>Chestermere</option>
			<option value='Cochrane'>Cochrane</option>
			<option value='Crossfield'>Crossfield</option>
			<option value='Eden&#x20;Valley&#x20;216'>Eden Valley 216</option>
			<option value='Foothills&#x20;No.&#x20;31,&#x20;MD&#x20;of'>Foothills No. 31, MD of</option>
			<option value='High&#x20;River'>High River</option>
			<option value='Irricana'>Irricana</option>
			<option value='Longview'>Longview</option>
			<option value='Okotoks'>Okotoks</option>
			<option value='Rocky&#x20;View&#x20;County'>Rocky View County</option>
			<option value='Tsuu&#x20;T&#x27;ina&#x20;Nation&#x20;145'>Tsuu T&#x27;ina Nation 145</option>
			<option value='Turner&#x20;Valley'>Turner Valley</option>
			<option value='Consort'>Consort</option>
			<option value='Alexander&#x20;134'>Alexander 134</option>
			<option value='Beaumont'>Beaumont</option>
			<option value='Bon&#x20;Accord'>Bon Accord</option>
			<option value='Bruderheim'>Bruderheim</option>
			<option value='Calmar'>Calmar</option>
			<option value='Devon'>Devon</option>
			<option value='Edmonton&#x20;Central'>Edmonton Central</option>
			<option value='Edmonton&#x20;North&#x20;Sector'>Edmonton North Sector</option>
			<option value='Edmonton&#x20;Northeast&#x20;sector'>Edmonton Northeast sector</option>
			<option value='Edmonton&#x20;Northwest&#x20;sector'>Edmonton Northwest sector</option>
			<option value='Edmonton&#x20;Southeast&#x20;sector'>Edmonton Southeast sector</option>
			<option value='Edmonton&#x20;Southwest&#x20;sector'>Edmonton Southwest sector</option>
			<option value='Edmonton&#x20;West&#x20;sector'>Edmonton West sector</option>
			<option value='Fort&#x20;Saskatchewan'>Fort Saskatchewan</option>
			<option value='Gibbons'>Gibbons</option>
			<option value='Leduc'>Leduc</option>
			<option value='Leduc&#x20;County'>Leduc County</option>
			<option value='Legal'>Legal</option>
			<option value='Morinville'>Morinville</option>
			<option value='Parkland&#x20;County'>Parkland County</option>
			<option value='Redwater'>Redwater</option>
			<option value='Spring&#x20;Lake'>Spring Lake</option>
			<option value='Spruce&#x20;Grove'>Spruce Grove</option>
			<option value='St.&#x20;Albert'>St. Albert</option>
			<option value='Stony&#x20;Plain'>Stony Plain</option>
			<option value='Stony&#x20;Plain&#x20;135'>Stony Plain 135</option>
			<option value='Strathcona&#x20;County'>Strathcona County</option>
			<option value='Sturgeon&#x20;County'>Sturgeon County</option>
			<option value='Thorsby'>Thorsby</option>
			<option value='Wabamun'>Wabamun</option>
			<option value='Wabamun&#x20;133A&nbsp;and&nbsp;133B'>Wabamun 133A&nbsp;and&nbsp;133B</option>
			<option value='Warburg'>Warburg</option>
			<option value='Edson'>Edson</option>
			<option value='Whitecourt'>Whitecourt</option>
			<option value='Fort&#x20;McMurray'>Fort McMurray</option>
			<option value='Grand&#x20;Prarie'>Grand Prarie</option>
			<option value='Jasper'>Jasper</option>
			<option value='Lethbridge'>Lethbridge</option>
			<option value='Lloydminster'>Lloydminster</option>
			<option value='Medicne&#x20;Hat'>Medicne Hat</option>
			<option value='High&#x20;Level'>High Level</option>
			<option value='Red&#x20;Deer'>Red Deer</option>
			<option value='&#x3a;&#x3a;__________'>&#x3a;&#x3a;__________</option>
			<option value='Abbotsford'>Abbotsford</option>
			<option value='Agassiz'>Agassiz</option>
			<option value='Bridal&#x20;Falls'>Bridal Falls</option>
			<option value='Chilliwak'>Chilliwak</option>
			<option value='Harrison&#x20;Hotsprings'>Harrison Hotsprings</option>
			<option value='Harrison&#x20;Mills'>Harrison Mills</option>
			<option value='Hope'>Hope</option>
			<option value='Sunshine&#x20;Valley'>Sunshine Valley</option>
			<option value='Kamloops'>Kamloops</option>
			<option value='Grand&#x20;Forks'>Grand Forks</option>
			<option value='Whistler'>Whistler</option>
			<option value='Fort&#x20;Nelson'>Fort Nelson</option>
			<option value='Prince&#x20;George'>Prince George</option>
			<option value='Kelowna'>Kelowna</option>
			<option value='Vernon'>Vernon</option>
			<option value='Prince&#x20;Rupert'>Prince Rupert</option>
			<option value='Burnaby'>Burnaby</option>
			<option value='Coquitlam'>Coquitlam</option>
			<option value='Delta'>Delta</option>
			<option value='East&#x20;Vancouver'>East Vancouver</option>
			<option value='Langley&#x20;City'>Langley City</option>
			<option value='Maple&#x20;Ridge'>Maple Ridge</option>
			<option value='New&#x20;Westminster'>New Westminster</option>
			<option value='North&#x20;Vancouver'>North Vancouver</option>
			<option value='Richmond'>Richmond</option>
			<option value='Surrey'>Surrey</option>
			<option value='Vancouver'>Vancouver</option>
			<option value='West&#x20;Vancouver'>West Vancouver</option>
			<option value='White&#x20;Rock'>White Rock</option>
			<option value='Alberni&#x20;Valley'>Alberni Valley</option>
			<option value='Campbell&#x20;River'>Campbell River</option>
			<option value='Comox&#x20;Valley'>Comox Valley</option>
			<option value='Cowichan&#x20;Valley'>Cowichan Valley</option>
			<option value='Nanaimo'>Nanaimo</option>
			<option value='Parksville-Qualicum&#x20;Beach'>Parksville-Qualicum Beach</option>
			<option value='Victoria'>Victoria</option>
			<option value='&#x3a;&#x3a;___________'>&#x3a;&#x3a;___________</option>
			<option value='Winnipeg'>Winnipeg</option>
			<option value='Gladstone'>Gladstone</option>
			<option value='Holland'>Holland</option>
			<option value='Portage&#x20;Le&#x20;Prarie'>Portage Le Prarie</option>
			<option value='Morden'>Morden</option>
			<option value='Dauphin'>Dauphin</option>
			<option value='Gimli'>Gimli</option>
			<option value='Beausejour'>Beausejour</option>
			<option value='Brandon'>Brandon</option>
			<option value='Churchill'>Churchill</option>
			<option value='&#x3a;&#x3a;____________'>&#x3a;&#x3a;____________</option>
			<option value='Swift&#x20;Current'>Swift Current</option>
			<option value='Moose&#x20;Jaw'>Moose Jaw</option>
			<option value='Kindersley'>Kindersley</option>
			<option value='Tisdale'>Tisdale</option>
			<option value='Stony&#x20;Rapids'>Stony Rapids</option>
			<option value='Dore&#x20;Lake'>Dore Lake</option>
			<option value='La&#x20;Ronge'>La Ronge</option>
			<option value='North&#x20;Battleford'>North Battleford</option>
			<option value='Prince&#x20;Albert'>Prince Albert</option>
			<option value='Regina'>Regina</option>
			<option value='Saskatoon'>Saskatoon</option>
			<option value='Wayburn'>Wayburn</option>
			<option value='Yorkton'>Yorkton</option>
		</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Lead Source</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='Lead Source'>
			<option value='-None-'>-None-</option>
			<option value='Select&#x20;Lead&#x20;Source'>Select Lead Source</option>
			<option value='Advertising'>Advertising</option>
			<option value='Business&#x20;Card'>Business Card</option>
			<option value='Call'>Call</option>
			<option value='Conference'>Conference</option>
			<option value='Email'>Email</option>
			<option value='Ex-Client'>Ex-Client</option>
			<option value='Internet&#x20;Marketing'>Internet Marketing</option>
			<option value='List&#x20;of&#x20;Leads'>List of Leads</option>
			<option value='Met&#x20;in&#x20;Public'>Met in Public</option>
			<option value='Other&#x20;Lead&#x20;Source'>Other Lead Source</option>
			<option value='Presentation'>Presentation</option>
			<option value='Referral'>Referral</option>
		<option selected value='Referral&#x20;Agreements'>Referral Agreements</option>
		</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Lead Sub-Source</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='LEADCF30'>
		<option selected value='Select&#x20;Sub-Source'>Select Sub-Source</option>
			<option value='-None-'>-None-</option>
			<option value='Ad&#x20;-&#x20;Classified'>Ad - Classified</option>
			<option value='Ad&#x20;-&#x20;Directory'>Ad - Directory</option>
			<option value='Ad&#x20;-&#x20;Magazine'>Ad - Magazine</option>
			<option value='Ad&#x20;-&#x20;Newspaper'>Ad - Newspaper</option>
			<option value='Ad&#x20;-&#x20;Radio'>Ad - Radio</option>
			<option value='Ad&#x20;-&#x20;Television'>Ad - Television</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;1'>Business Card Display 1</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;2'>Business Card Display 2</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;3'>Business Card Display 3</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;4'>Business Card Display 4</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;5'>Business Card Display 5</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;6'>Business Card Display 6</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;7'>Business Card Display 7</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;8'>Business Card Display 8</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;9'>Business Card Display 9</option>
			<option value='Captive&#x20;Ex-Client'>Captive Ex-Client</option>
			<option value='Client&#x20;Call&#x20;-&#x20;Inbound'>Client Call - Inbound</option>
			<option value='Client&#x20;Call&#x20;-&#x20;Outbound'>Client Call - Outbound</option>
			<option value='Cold&#x20;Call'>Cold Call</option>
			<option value='Conference&#x20;1'>Conference 1</option>
			<option value='Conference&#x20;2'>Conference 2</option>
			<option value='Conference&#x20;3'>Conference 3</option>
			<option value='Conference&#x20;4'>Conference 4</option>
			<option value='Conference&#x20;5'>Conference 5</option>
			<option value='Email&#x20;&#x28;Inbound&#x29;'>Email &#x28;Inbound&#x29;</option>
			<option value='Email&#x20;&#x28;Outbound&#x29;'>Email &#x28;Outbound&#x29;</option>
			<option value='Facebook&#x20;&#x28;Business&#x29;'>Facebook &#x28;Business&#x29;</option>
			<option value='Facebook&#x20;&#x28;Personal&#x29;'>Facebook &#x28;Personal&#x29;</option>
			<option value='Google&#x20;AdSense'>Google AdSense</option>
			<option value='Google&#x20;AdWords'>Google AdWords</option>
			<option value='Internet&#x20;-&#x20;Chat'>Internet - Chat</option>
			<option value='Internet&#x20;-&#x20;Classified&#x20;Ads'>Internet - Classified Ads</option>
			<option value='Internet&#x20;-&#x20;Other'>Internet - Other</option>
			<option value='LinkedIn&#x20;&#x28;Business&#x29;'>LinkedIn &#x28;Business&#x29;</option>
			<option value='LinkedIn&#x20;&#x28;Profile&#x29;'>LinkedIn &#x28;Profile&#x29;</option>
			<option value='List&#x20;of&#x20;Leads&#x20;1'>List of Leads 1</option>
			<option value='List&#x20;of&#x20;Leads&#x20;2'>List of Leads 2</option>
			<option value='List&#x20;of&#x20;Leads&#x20;3'>List of Leads 3</option>
			<option value='List&#x20;of&#x20;Leads&#x20;4'>List of Leads 4</option>
			<option value='List&#x20;of&#x20;Leads&#x20;5'>List of Leads 5</option>
			<option value='Met&#x20;in&#x20;Public&#x20;-&#x20;Gym'>Met in Public - Gym</option>
			<option value='Met&#x20;in&#x20;Public&#x20;-&#x20;Other'>Met in Public - Other</option>
			<option value='Met&#x20;in&#x20;Public&#x20;-&#x20;Random'>Met in Public - Random</option>
			<option value='Met&#x20;in&#x20;Public&#x20;-&#x20;School'>Met in Public - School</option>
			<option value='Other&#x20;Lead&#x20;Sub-Source'>Other Lead Sub-Source</option>
			<option value='Presentation&#x20;1'>Presentation 1</option>
			<option value='Presentation&#x20;2'>Presentation 2</option>
			<option value='Presentation&#x20;3'>Presentation 3</option>
			<option value='Presentation&#x20;4'>Presentation 4</option>
			<option value='Presentation&#x20;5'>Presentation 5</option>
			<option value='Referral&#x20;Agreement&#x20;Josee&#x20;Lafortune'>Referral Agreement Josee Lafortune</option>
			<option value='Referral&#x20;Agreement&#x20;Vanessa&#x20;Gagnon'>Referral Agreement Vanessa Gagnon</option>
			<option value='Referral&#x20;Agreement&#x20;3'>Referral Agreement 3</option>
			<option value='Referral&#x20;Agreement&#x20;4'>Referral Agreement 4</option>
			<option value='Referral&#x20;Agreement&#x20;5'>Referral Agreement 5</option>
			<option value='Referral&#x20;Agreement&#x20;6'>Referral Agreement 6</option>
			<option value='Referral&#x20;Agreement&#x20;Orbis'>Referral Agreement Orbis</option>
			<option value='Referral&#x20;Agreement&#x20;7'>Referral Agreement 7</option>
			<option value='Referral&#x20;Agreement&#x20;8'>Referral Agreement 8</option>
			<option value='Referral&#x20;Agreement&#x20;9'>Referral Agreement 9</option>
			<option value='Referral&#x20;by&#x20;Client'>Referral by Client</option>
			<option value='Referral&#x20;by&#x20;COI'>Referral by COI</option>
			<option value='Referral&#x20;by&#x20;Family&#x20;or&#x20;Friend'>Referral by Family or Friend</option>
			<option value='Referral&#x20;by&#x20;Insurer'>Referral by Insurer</option>
			<option value='Referral&#x20;by&#x20;MGA'>Referral by MGA</option>
			<option value='Referral&#x20;by&#x20;Other&#x20;Source'>Referral by Other Source</option>
			<option value='Seminar&#x20;1'>Seminar 1</option>
			<option value='Seminar&#x20;2'>Seminar 2</option>
			<option value='Seminar&#x20;3'>Seminar 3</option>
			<option value='Seminar&#x20;4'>Seminar 4</option>
			<option value='Seminar&#x20;5'>Seminar 5</option>
			<option value='Web&#x20;Site'>Web Site</option>
			<option value='Webinar&#x20;1'>Webinar 1</option>
			<option value='Webinar&#x20;2'>Webinar 2</option>
			<option value='Webinar&#x20;3'>Webinar 3</option>
			<option value='Webinar&#x20;4'>Webinar 4</option>
			<option value='Webinar&#x20;5'>Webinar 5</option>
			<option value='YouTube'>YouTube</option>
		</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Rating</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='Rating'>
			<option value='-None-'>-None-</option>
		<option selected value='Hot'>Hot</option>
			<option value='Fair'>Fair</option>
			<option value='Cold'>Cold</option>
		</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Service Types</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='LEADCF34' multiple>
			<option value='Accounting'>Accounting</option>
			<option value='Banking'>Banking</option>
			<option value='Insurance&#x20;-&#x20;Commercial'>Insurance - Commercial</option>
			<option value='Insurance&#x20;-&#x20;Group'>Insurance - Group</option>
		<option selected value='Insurance&#x20;-&#x20;Personal'>Insurance - Personal</option>
			<option value='Insurance&#x20;-&#x20;Property'>Insurance - Property</option>
			<option value='Investments&#x20;-&#x20;Annuity'>Investments - Annuity</option>
			<option value='Investments&#x20;-&#x20;Mutual&#x20;Funds'>Investments - Mutual Funds</option>
			<option value='Investments&#x20;-&#x20;Other'>Investments - Other</option>
			<option value='Investments&#x20;-&#x20;Segregated&#x20;Funds'>Investments - Segregated Funds</option>
			<option value='Mortgage'>Mortgage</option>
			<option value='Other&#x20;Services'>Other Services</option>
			<option value='Tax&#x20;Services'>Tax Services</option>
		</select></td><td style='width:30%;'></td></tr>

	<tr><td colspan='2' style='text-align:center; padding-top:15px;font-size:12px;'>
		<input style='margin-right: 5px;cursor: pointer;font-size:12px;color:#000000' id='formsubmit' type='submit' value='Submit This Referral'  ></input> <input type='reset' name='reset' style='cursor: pointer;font-size:12px;color:#000000' value='Reset' ></input> </td></tr></table>
	<script>
 	  var mndFileds=new Array('Phone','Last Name','First Name','LEADCF155');
 	  var fldLangVal=new Array('Phone','Client Last Name','Client First Name','Who is referring this lead?'); 
		var name='';
		var email='';

 	  function checkMandatory4480440000000247031() {
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads4480440000000247031'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(${regex}, '')).length==0) {
			 if(fieldObj.type =='file')
				{ 
				 alert('Please select a file to upload.'); 
				 fieldObj.focus(); 
				 return false;
				} 
			alert(fldLangVal[i] +' cannot be empty.'); 
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none.'); 
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   } 
			 } 
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		 return validateFileUpload();

		document.getElementById('formsubmit').disabled=true;
	}function validateFileUpload(){
		 var uploadedFiles = document.getElementById('theFile'); 
		 var totalFileSize =0; 
		 if(uploadedFiles.files.length >3){ 
			 alert('You can upload a maximum of three files at a time.'); 
			 return false; 
		 } 
		 if ('files' in uploadedFiles) { 
			 if (uploadedFiles.files.length != 0) { 
				 for (var i = 0; i < uploadedFiles.files.length; i++) { 
					 var file = uploadedFiles.files[i]; 
					 if ('size' in file) { 
						 totalFileSize = totalFileSize + file.size; 
					 } 
				 } 
				 if(totalFileSize > 20971520){ 
					 alert('Total file(s) size should not exceed 20MB.'); 
					 return false; 
				 } 
			 } 
		 } 
	 }
</script>
	</form>
</div>`

const zohoStringFR = `
<!-- Note :
   - You can modify the font style and form style to suit your website. 
   - Code lines with comments ���Do not remove this code���  are required for the form to work properly, make sure that you do not remove these lines of code. 
   - The Mandatory check script can modified as to suit your business needs. 
   - It is important that you test the modified form before going live.-->
<div id='crmWebToEntityForm' style='width:600px;margin:auto;'>
   <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
   <form action='https://platform.zoho.com/crm/WebToLeadForm' name=WebToLeads4480440000000250008 method='POST' enctype='multipart/form-data' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory4480440000000250008()' accept-charset='UTF-8'>
 <input type='text' style='display:none;' name='xnQsjsdp' value='38ba8f6255d2c5eebbda5a355596913ad288491f48f84f5c2b25518a3aba30da'></input> 
 <input type='hidden' name='zc_gad' id='zc_gad' value=''></input> 
 <input type='text' style='display:none;' name='xmIwtLD' value='1f76f2aed5ba4fcb9d24a9bf427b4c846260ad0b43d8c0a1181e6115c55699f9'></input> 
 <input type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
 <input type='text' style='display:none;' name='returnURL' value='https://www.hedg.ca/fr' > </input><br></br>
	 <!-- Do not remove this code. -->
	<style>
		#crmWebToEntityForm tr , #crmWebToEntityForm td { 
			padding:6px;
			border-spacing:0px;
			border-width:0px;
			}
	</style>
	<table style='width:600px;background-color:#ffffff;background-color:white;color:black'><tr><td colspan='2' align='left' style='color:black;font-family:Verdana;font-size:14px;word-break: break-word;'><strong>Veuillez nous r&eacute;f&eacute;rer ici&#x3a;</strong></td></tr> <br></br><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Qui réfère ce prospect?<span style='color:red;'>*</span></td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='255' name='LEADCF155' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Veuillez saisir votre nom &#x28;nom du courtier hypoth&eacute;caire r&eacute;f&eacute;rant ce prospect &agrave; Hedg&#x29;' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Nom de famille du client<span style='color:red;'>*</span></td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='80' name='Last Name' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Veuillez saisir le nom de famille de votre client &agrave; contacter par Hedg.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Prénom du client<span style='color:red;'>*</span></td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='40' name='First Name' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Veuillez saisir le pr&eacute;nom de votre client &agrave; contacter par Hedg.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Téléphone<span style='color:red;'>*</span></td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='30' name='Phone' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='T&eacute;l&eacute;phone principal pour contacter votre client.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Courriel</td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='100' name='Email' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Veuillez saisir le courriel de votre client &agrave; contacter par Hedg.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Langue des documents</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='LEADCF22'>
			<option value='-None-'>-None-</option>
			<option value='English'>English</option>
			<option value='Francais'>Francais</option>
		</select></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Quelle langue est-ce que votre client pr&eacute;f&egrave;re pour les affaires&#x3f; &#x28;Anglais ou fran&ccedil;ais&#x29;' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Hypoth&egrave;que</td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='255' name='LEADCF17' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Veuillez saisir le montant total du pr&ecirc;t hypoth&eacute;caire. Veuillez joindre les documents du client.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%;'>Notes </td><td style='width:40%;'> <textarea name='LEADCF12' maxlength='32000' style='width:100%;'>&nbsp;</textarea></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Saisissez ici des notes pour ce client, telles que les coordonn&eacute;es ou besoins particuliers.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td style='nowrap:nowrap;text-align:right;font-size:12px;font-family:Verdana;width:30%;box-sizing:border-box;'>Télécharger les fichiers</td>
	    <td style='padding-top: 10px;width:40%;box-sizing:border-box;'><input type='file' name='theFile' id='theFile' multiple style='width:100%;box-sizing:border-box;'/><p style='color:black;font-size:11px;padding-left:3px;'>File(s) size limit is 20MB.</p></td>
	<td style='width:30%;vertical-align: bottom;'><span title='Veuillez joindre jusqu&#x27;&agrave; 3 documents ici, jusqu&#x27;&agrave; 20 Mo &#x28;documents hypoth&eacute;caires, etc.&#x29;' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td>
	</tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Company</td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='100' name='Company' value='Account&#x20;Name&#x20;-&#x20;To&#x20;Be&#x20;Updated'></input></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Country</td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='100' name='Country' value='Canada'></input></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Lead Status</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='Lead Status'>
			<option value='-None-'>-None-</option>
		<option selected value='Attempt&#x20;to&#x20;Contact'>Attempt to Contact</option>
			<option value='Awaiting&#x20;Reply'>Awaiting Reply</option>
			<option value='Began&#x20;Talking'>Began Talking</option>
			<option value='Convert&#x20;to&#x20;Client'>Convert to Client</option>
			<option value='Inactive&#x20;Lead'>Inactive Lead</option>
			<option value='Junk&#x20;Lead'>Junk Lead</option>
			<option value='Lost&#x20;Lead'>Lost Lead</option>
			<option value='Not&#x20;Qualified'>Not Qualified</option>
		</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Lead Sub-Region</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='LEADCF161'>
		<option selected value='Select&#x20;Sub-Region'>Select Sub-Region</option>
			<option value='-None-'>-None-</option>
			<option value='Ahuntsic'>Ahuntsic</option>
			<option value='Anjou'>Anjou</option>
			<option value='Assomption'>Assomption</option>
			<option value='Baie-d&#x27;Urfe'>Baie-d&#x27;Urfe</option>
			<option value='Beaconsfield'>Beaconsfield</option>
			<option value='Beloeil'>Beloeil</option>
			<option value='Blainville'>Blainville</option>
			<option value='Boisbriand'>Boisbriand</option>
			<option value='Bois-des-Filion'>Bois-des-Filion</option>
			<option value='Boucherville'>Boucherville</option>
			<option value='Brossard'>Brossard</option>
			<option value='Candiac'>Candiac</option>
			<option value='Carignan'>Carignan</option>
			<option value='Cartierville'>Cartierville</option>
			<option value='Chambly'>Chambly</option>
			<option value='Charlemagne'>Charlemagne</option>
			<option value='Chateauguay'>Chateauguay</option>
			<option value='Cote-des-Nieges'>Cote-des-Nieges</option>
			<option value='Cote-Saint-Luc'>Cote-Saint-Luc</option>
			<option value='Delson'>Delson</option>
			<option value='Deux-Montagnes'>Deux-Montagnes</option>
			<option value='Dollard-des-Ormeaux&#x20;DDO'>Dollard-des-Ormeaux DDO</option>
			<option value='Dorval'>Dorval</option>
			<option value='Epiphanie'>Epiphanie</option>
			<option value='Hampstead'>Hampstead</option>
			<option value='Hochelaga'>Hochelaga</option>
			<option value='Ile-Bizard'>Ile-Bizard</option>
			<option value='Ile-des-Souers&#x20;-&#x20;Nun&#x27;s&#x20;Island'>Ile-des-Souers - Nun&#x27;s Island</option>
			<option value='Ile-Perrot'>Ile-Perrot</option>
			<option value='Kirkland'>Kirkland</option>
			<option value='La&#x20;Prairie'>La Prairie</option>
			<option value='Lachine'>Lachine</option>
			<option value='Lasalle'>Lasalle</option>
			<option value='Laval'>Laval</option>
			<option value='Laval&#x20;&#x28;Auteuil&#x29;'>Laval &#x28;Auteuil&#x29;</option>
			<option value='Laval&#x20;&#x28;Chomedey&#x29;'>Laval &#x28;Chomedey&#x29;</option>
			<option value='Laval&#x20;&#x28;Duvernay&#x29;'>Laval &#x28;Duvernay&#x29;</option>
			<option value='Laval&#x20;&#x28;Fabreville&#x29;'>Laval &#x28;Fabreville&#x29;</option>
			<option value='Laval&#x20;&#x28;Iles&#x20;Laval&#x29;'>Laval &#x28;Iles Laval&#x29;</option>
			<option value='Laval&#x20;&#x28;Laval-des-Rapides&#x29;'>Laval &#x28;Laval-des-Rapides&#x29;</option>
			<option value='Laval&#x20;&#x28;Laval-Ouest&#x29;'>Laval &#x28;Laval-Ouest&#x29;</option>
			<option value='Laval&#x20;&#x28;Laval-sur-le-Lac&#x29;'>Laval &#x28;Laval-sur-le-Lac&#x29;</option>
			<option value='Laval&#x20;&#x28;Pont-Viau&#x29;'>Laval &#x28;Pont-Viau&#x29;</option>
			<option value='Laval&#x20;&#x28;Sainte-Dorothee&#x29;'>Laval &#x28;Sainte-Dorothee&#x29;</option>
			<option value='Laval&#x20;&#x28;Saint-Martin&#x29;'>Laval &#x28;Saint-Martin&#x29;</option>
			<option value='Laval&#x20;&#x28;Sainte-Rose&#x29;'>Laval &#x28;Sainte-Rose&#x29;</option>
			<option value='Laval&#x20;&#x28;Saint-Francois&#x29;'>Laval &#x28;Saint-Francois&#x29;</option>
			<option value='Laval&#x20;&#x28;Saint-Vincent-de-Paul&#x29;'>Laval &#x28;Saint-Vincent-de-Paul&#x29;</option>
			<option value='Laval&#x20;&#x28;Vimont&#x29;'>Laval &#x28;Vimont&#x29;</option>
			<option value='Longueuil'>Longueuil</option>
			<option value='Longueuil&nbsp;&#x28;Greenfield&#x20;Park&#x29;'>Longueuil&nbsp;&#x28;Greenfield Park&#x29;</option>
			<option value='Longueuil&nbsp;&#x28;Saint-Hubert&#x29;'>Longueuil&nbsp;&#x28;Saint-Hubert&#x29;</option>
			<option value='Longueuil&nbsp;&#x28;Vieux-longueuil&#x29;'>Longueuil&nbsp;&#x28;Vieux-longueuil&#x29;</option>
			<option value='Lorraine'>Lorraine</option>
			<option value='Mascouche'>Mascouche</option>
			<option value='McMasterville'>McMasterville</option>
			<option value='Mirabel'>Mirabel</option>
			<option value='Montreal-Est'>Montreal-Est</option>
			<option value='Montreal-Nord'>Montreal-Nord</option>
			<option value='Montreal-Ouest&#x20;-&#x20;Montreal&#x20;West'>Montreal-Ouest - Montreal West</option>
			<option value='Mont-Royal&#x20;TMR'>Mont-Royal TMR</option>
			<option value='Mont-Saint-Hilaire'>Mont-Saint-Hilaire</option>
			<option value='Notre-dame-de-Grace&#x20;NDG'>Notre-dame-de-Grace NDG</option>
			<option value='Oka'>Oka</option>
			<option value='Otterburn&#x20;Park'>Otterburn Park</option>
			<option value='Outremont'>Outremont</option>
			<option value='Parc-Extension'>Parc-Extension</option>
			<option value='Petite-Patrie'>Petite-Patrie</option>
			<option value='Pierrefonds'>Pierrefonds</option>
			<option value='Plateau&#x20;Mt-Royal'>Plateau Mt-Royal</option>
			<option value='Pointe-aux-Trembles'>Pointe-aux-Trembles</option>
			<option value='Pointe-Calumet'>Pointe-Calumet</option>
			<option value='Pointe-Claire'>Pointe-Claire</option>
			<option value='Pointe-Saint-Charles'>Pointe-Saint-Charles</option>
			<option value='Repentigny'>Repentigny</option>
			<option value='Riviere-des-Prairies'>Riviere-des-Prairies</option>
			<option value='Rosemere'>Rosemere</option>
			<option value='Rosemont'>Rosemont</option>
			<option value='Saint-Basile-le-Grand'>Saint-Basile-le-Grand</option>
			<option value='Saint-Bruno-de-Montarville'>Saint-Bruno-de-Montarville</option>
			<option value='Saint-Constant'>Saint-Constant</option>
			<option value='Sainte-Anne-des-Plaines'>Sainte-Anne-des-Plaines</option>
			<option value='Sainte-Catherine'>Sainte-Catherine</option>
			<option value='Sainte-Julie'>Sainte-Julie</option>
			<option value='Sainte-Marthe-sur-le-Lac'>Sainte-Marthe-sur-le-Lac</option>
			<option value='Sainte-Therese'>Sainte-Therese</option>
			<option value='Saint-Eustache'>Saint-Eustache</option>
			<option value='Saint-Isidore'>Saint-Isidore</option>
			<option value='Saint-Joseph-du-Lac'>Saint-Joseph-du-Lac</option>
			<option value='Saint-Lambert'>Saint-Lambert</option>
			<option value='Saint-Laurent'>Saint-Laurent</option>
			<option value='Saint-Leonard'>Saint-Leonard</option>
			<option value='Saint-Philippe'>Saint-Philippe</option>
			<option value='Saint-Sulpice'>Saint-Sulpice</option>
			<option value='St-Jerome'>St-Jerome</option>
			<option value='Sud-Ouest&#x20;-&#x20;South&#x20;West'>Sud-Ouest - South West</option>
			<option value='Terrebonne'>Terrebonne</option>
			<option value='Varennes'>Varennes</option>
			<option value='Verdun'>Verdun</option>
			<option value='Ville-Marie&#x20;Downtown'>Ville-Marie Downtown</option>
			<option value='Villeray'>Villeray</option>
			<option value='Westmount'>Westmount</option>
			<option value='Abitibi&#x20;&#x28;Amos&#x20;Region&#x29;'>Abitibi &#x28;Amos Region&#x29;</option>
			<option value='Abitibi&#x20;&#x28;La&#x20;Sarre&#x20;Region&#x29;'>Abitibi &#x28;La Sarre Region&#x29;</option>
			<option value='Abitibi&#x20;&#x28;Rouyn-Noranda&#x20;Region&#x29;'>Abitibi &#x28;Rouyn-Noranda Region&#x29;</option>
			<option value='Abitibi&#x20;&#x28;Val-d&#x27;Or&#x20;Region&#x29;'>Abitibi &#x28;Val-d&#x27;Or Region&#x29;</option>
			<option value='Abitibi&#x20;&#x28;Ville-Marie&#x20;Region&#x29;'>Abitibi &#x28;Ville-Marie Region&#x29;</option>
			<option value='Bas&#x20;St-Laurent&#x20;&#x28;Rimouski&#x20;Region&#x29;'>Bas St-Laurent &#x28;Rimouski Region&#x29;</option>
			<option value='Bas&#x20;St-Laurent&#x20;&#x28;Matane&#x20;Region&#x29;'>Bas St-Laurent &#x28;Matane Region&#x29;</option>
			<option value='Bas&#x20;St-Laurent&#x20;&#x28;Riviere-du-Loup&#x20;Region&#x29;'>Bas St-Laurent &#x28;Riviere-du-Loup Region&#x29;</option>
			<option value='Quebec&#x20;City&#x20;Region'>Quebec City Region</option>
			<option value='Cap.&#x20;Nat.&#x20;&#x28;Beaupre&#x20;Region&#x29;'>Cap. Nat. &#x28;Beaupre Region&#x29;</option>
			<option value='Cap.&#x20;Nat.&#x20;&#x28;Charlevoix&#x20;Region&#x29;'>Cap. Nat. &#x28;Charlevoix Region&#x29;</option>
			<option value='Cap.&#x20;Nat.&#x20;&#x28;Portneuf&#x20;Region&#x29;'>Cap. Nat. &#x28;Portneuf Region&#x29;</option>
			<option value='Centre-du-QC&#x20;&#x28;Becancour&#x20;Region&#x29;'>Centre-du-QC &#x28;Becancour Region&#x29;</option>
			<option value='Centre-du-QC&#x20;&#x28;Drummondville&#x20;Region&#x29;'>Centre-du-QC &#x28;Drummondville Region&#x29;</option>
			<option value='Centre-du-QC&#x20;&#x28;Nicolet&#x20;Region&#x29;'>Centre-du-QC &#x28;Nicolet Region&#x29;</option>
			<option value='Centre-du-QC&#x20;&#x28;Victoriaville&#x20;Region&#x29;'>Centre-du-QC &#x28;Victoriaville Region&#x29;</option>
			<option value='Chaudiere-Appalaches&#x20;&#x28;Levis&#x20;Region&#x29;'>Chaudiere-Appalaches &#x28;Levis Region&#x29;</option>
			<option value='Chaudiere-Appalaches&#x20;&#x28;Montmagny&#x20;Region&#x29;'>Chaudiere-Appalaches &#x28;Montmagny Region&#x29;</option>
			<option value='Chaudiere-Appalaches&#x20;&#x28;St-Georges&#x20;Region&#x29;'>Chaudiere-Appalaches &#x28;St-Georges Region&#x29;</option>
			<option value='Chaudiere-Appalaches&#x20;&#x28;Thetford&#x20;Mines&#x20;Region&#x29;'>Chaudiere-Appalaches &#x28;Thetford Mines Region&#x29;</option>
			<option value='Cote-Nord&#x20;&#x28;Baie-Comeau&#x20;Region&#x29;'>Cote-Nord &#x28;Baie-Comeau Region&#x29;</option>
			<option value='Cote-Nord&#x20;&#x28;Sept-Iles&#x20;Region&#x29;'>Cote-Nord &#x28;Sept-Iles Region&#x29;</option>
			<option value='Estrie&#x20;&#x28;Asbestos&#x20;Region&#x29;'>Estrie &#x28;Asbestos Region&#x29;</option>
			<option value='Estrie&#x20;&#x28;Granby,&#x20;Cowansville&#x20;Region&#x29;'>Estrie &#x28;Granby, Cowansville Region&#x29;</option>
			<option value='Estrie&#x20;&#x28;Lac-Megantic&#x20;Region&#x29;'>Estrie &#x28;Lac-Megantic Region&#x29;</option>
			<option value='Estrie&#x20;&#x28;Sherbrooke&#x20;Region&#x29;'>Estrie &#x28;Sherbrooke Region&#x29;</option>
			<option value='Gaspesie&#x20;&#x28;Baie-des-Chaleurs&#x20;Region&#x29;'>Gaspesie &#x28;Baie-des-Chaleurs Region&#x29;</option>
			<option value='Gaspesie&#x20;&#x28;Gaspe&#x20;Region&#x29;'>Gaspesie &#x28;Gaspe Region&#x29;</option>
			<option value='Gaspesie&#x20;&#x28;Ste-Anne&#x20;Region&#x29;'>Gaspesie &#x28;Ste-Anne Region&#x29;</option>
			<option value='Gaspesie&#x20;&#x28;Iles-de-la-Madeleine&#x29;'>Gaspesie &#x28;Iles-de-la-Madeleine&#x29;</option>
			<option value='Lanaudiere&#x20;&#x28;Rive&#x20;Nord&#x29;'>Lanaudiere &#x28;Rive Nord&#x29;</option>
			<option value='Lanaudiere&#x20;&#x28;Basse,&#x20;Joliette&#x20;Region&#x29;'>Lanaudiere &#x28;Basse, Joliette Region&#x29;</option>
			<option value='Lanaudiere&#x20;&#x28;Moyenne,&#x20;Rawdon&#x20;Region&#x29;'>Lanaudiere &#x28;Moyenne, Rawdon Region&#x29;</option>
			<option value='Lanaudiere&#x20;&#x28;Haute,&#x20;Montcalm&#x20;Region&#x29;'>Lanaudiere &#x28;Haute, Montcalm Region&#x29;</option>
			<option value='Laurentides&#x20;&#x28;Rive&#x20;Nord&#x29;'>Laurentides &#x28;Rive Nord&#x29;</option>
			<option value='Laurentides&#x20;&#x28;Moyenne,&#x20;Coeur-des-Laurentides&#x20;Region&#x29;'>Laurentides &#x28;Moyenne, Coeur-des-Laurentides Region&#x29;</option>
			<option value='Laurentides&#x20;&#x28;Hautes,&#x20;Mt-Laurier&#x20;Region&#x29;'>Laurentides &#x28;Hautes, Mt-Laurier Region&#x29;</option>
			<option value='Laurentides&#x20;&#x28;La&#x20;Chute&#x20;Region&#x29;'>Laurentides &#x28;La Chute Region&#x29;</option>
			<option value='Mauricie&#x20;&#x28;Basse,&#x20;Trois-Rivieres&#x20;Region&#x29;'>Mauricie &#x28;Basse, Trois-Rivieres Region&#x29;</option>
			<option value='Mauricie&#x20;&#x28;Moyenne,&#x20;Shawinigan&#x20;Region&#x29;'>Mauricie &#x28;Moyenne, Shawinigan Region&#x29;</option>
			<option value='Mauricie&#x20;&#x28;Haute,&#x20;La&#x20;Tuque&nbsp;Region&#x29;'>Mauricie &#x28;Haute, La Tuque&nbsp;Region&#x29;</option>
			<option value='Monteregie&#x20;&#x28;Rive&#x20;Sud&#x29;'>Monteregie &#x28;Rive Sud&#x29;</option>
			<option value='Monteregie&#x20;&#x28;10E,&#x20;Chambly&#x20;&amp;&#x20;St-Jean-sur-Richelieu&#x20;Region&#x29;'>Monteregie &#x28;10E, Chambly &amp; St-Jean-sur-Richelieu Region&#x29;</option>
			<option value='Monteregie&#x20;&#x28;15S,&#x20;Napierville&#x20;Region&#x29;'>Monteregie &#x28;15S, Napierville Region&#x29;</option>
			<option value='Monteregie&#x20;&#x28;20E,&#x20;St-Hyacinthe&#x20;&amp;&#x20;Sorel&#x20;Region&#x29;'>Monteregie &#x28;20E, St-Hyacinthe &amp; Sorel Region&#x29;</option>
			<option value='Monteregie&#x20;&#x28;40W,&#x20;Vaudreuil&#x20;Region&#x29;'>Monteregie &#x28;40W, Vaudreuil Region&#x29;</option>
			<option value='Monteregie&#x20;&#x28;Pont&#x20;Mercier,&#x20;Chateauguay&#x20;Region&#x29;'>Monteregie &#x28;Pont Mercier, Chateauguay Region&#x29;</option>
			<option value='Nord-du-Quebec&#x20;&#x28;Eeyou&#x20;Istchee&#x29;'>Nord-du-Quebec &#x28;Eeyou Istchee&#x29;</option>
			<option value='Nord-du-Quebec&#x20;&#x28;Jamesie&#x29;'>Nord-du-Quebec &#x28;Jamesie&#x29;</option>
			<option value='Nord-du-Quebec&#x20;&#x28;Kativik&#x29;'>Nord-du-Quebec &#x28;Kativik&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Gatineau&#x29;'>Outaouais &#x28;Gatineau&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Gatineau&#x20;-&#x20;Aylmer&#x29;'>Outaouais &#x28;Gatineau - Aylmer&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Gatineau&#x20;-&#x20;Buckingham&#x29;'>Outaouais &#x28;Gatineau - Buckingham&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Gatineau&#x20;-&#x20;Hull&#x29;'>Outaouais &#x28;Gatineau - Hull&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Collines-de-l&#x27;Outaouais,&#x20;Chelsea&#x20;Region&#x29;'>Outaouais &#x28;Collines-de-l&#x27;Outaouais, Chelsea Region&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Papineau&#x20;Region&#x29;'>Outaouais &#x28;Papineau Region&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Pontiac&#x20;Region&#x29;'>Outaouais &#x28;Pontiac Region&#x29;</option>
			<option value='Outaouais&#x20;&#x28;Vallee-de-la-Gatineau,&#x20;Maniwaki&#x20;Region&#x29;'>Outaouais &#x28;Vallee-de-la-Gatineau, Maniwaki Region&#x29;</option>
			<option value='Saguenay&#x20;&#x28;Lac-Saint-Jean&#x20;Region&#x29;'>Saguenay &#x28;Lac-Saint-Jean Region&#x29;</option>
			<option value='Saguenay&#x20;&#x28;Ville&#x20;Saguenay&#x20;Region&#x29;'>Saguenay &#x28;Ville Saguenay Region&#x29;</option>
			<option value='&#x3a;&#x3a;__'>&#x3a;&#x3a;__</option>
			<option value='Ajax'>Ajax</option>
			<option value='Aurora'>Aurora</option>
			<option value='Brampton'>Brampton</option>
			<option value='Brock'>Brock</option>
			<option value='Burlington'>Burlington</option>
			<option value='Caledon'>Caledon</option>
			<option value='Clarington'>Clarington</option>
			<option value='East&#x20;Gwillimbury'>East Gwillimbury</option>
			<option value='East&#x20;York'>East York</option>
			<option value='Etobicoke'>Etobicoke</option>
			<option value='Georgina'>Georgina</option>
			<option value='Halton&#x20;Hills'>Halton Hills</option>
			<option value='King'>King</option>
			<option value='Markham'>Markham</option>
			<option value='Milton'>Milton</option>
			<option value='Mississauga'>Mississauga</option>
			<option value='Newmarket'>Newmarket</option>
			<option value='North&#x20;York'>North York</option>
			<option value='Oakville'>Oakville</option>
			<option value='Oshawa'>Oshawa</option>
			<option value='Pickering'>Pickering</option>
			<option value='Richmond&#x20;Hill'>Richmond Hill</option>
			<option value='Scarborough'>Scarborough</option>
			<option value='Scugog'>Scugog</option>
			<option value='Toronto&#x20;Downtown'>Toronto Downtown</option>
			<option value='Uxbridge'>Uxbridge</option>
			<option value='Vaughan'>Vaughan</option>
			<option value='Whitby'>Whitby</option>
			<option value='Whitchurch-Stouffville'>Whitchurch-Stouffville</option>
			<option value='York'>York</option>
			<option value='Algonquin&#x20;&#x28;Bancroft&#x20;Region&#x29;'>Algonquin &#x28;Bancroft Region&#x29;</option>
			<option value='Algonquin&#x20;&#x28;Huntsville&#x20;Region&#x29;'>Algonquin &#x28;Huntsville Region&#x29;</option>
			<option value='Algonquin&#x20;&#x28;North&#x20;Bay&#x20;Region&#x29;'>Algonquin &#x28;North Bay Region&#x29;</option>
			<option value='Algonquin&#x20;&#x28;Pembroke&#x20;Region&#x29;'>Algonquin &#x28;Pembroke Region&#x29;</option>
			<option value='East&#x20;Ontario&#x20;&#x28;Brockville&#x20;Region&#x29;'>East Ontario &#x28;Brockville Region&#x29;</option>
			<option value='East&#x20;Ontario&#x20;&#x28;Casselman&#x20;Region&#x29;'>East Ontario &#x28;Casselman Region&#x29;</option>
			<option value='East&#x20;Ontario&#x20;&#x28;Cornwall&#x20;Region&#x29;'>East Ontario &#x28;Cornwall Region&#x29;</option>
			<option value='East&#x20;Ontario&#x20;&#x28;Hawkesbury&#x20;Region&#x29;'>East Ontario &#x28;Hawkesbury Region&#x29;</option>
			<option value='Georgian&#x20;Triangle&#x20;&#x28;Barrie&#x20;Region&#x29;'>Georgian Triangle &#x28;Barrie Region&#x29;</option>
			<option value='Georgian&#x20;Triangle&#x20;&#x28;Gravenhurst&#x20;Region&#x29;'>Georgian Triangle &#x28;Gravenhurst Region&#x29;</option>
			<option value='Georgian&#x20;Triangle&#x20;&#x28;Owen&#x20;Sound&#x20;Region&#x29;'>Georgian Triangle &#x28;Owen Sound Region&#x29;</option>
			<option value='Hamilton'>Hamilton</option>
			<option value='Hamilton&#x20;&#x28;Brantford&#x20;Region&#x29;'>Hamilton &#x28;Brantford Region&#x29;</option>
			<option value='Hamilton&#x20;&#x28;Kitchener&#x20;Region&#x29;'>Hamilton &#x28;Kitchener Region&#x29;</option>
			<option value='Hamilton&#x20;&#x28;Niagara&#x20;Region&#x29;'>Hamilton &#x28;Niagara Region&#x29;</option>
			<option value='Kingston'>Kingston</option>
			<option value='Kingston&#x20;&#x28;Belleville&#x20;Region&#x29;'>Kingston &#x28;Belleville Region&#x29;</option>
			<option value='Kingston&#x20;&#x28;Madoc&#x20;Region&#x29;'>Kingston &#x28;Madoc Region&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Central&#x29;'>Ottawa &#x28;Central&#x29;</option>
			<option value='Ottawa&#x20;&#x28;East&#x20;End&#x29;'>Ottawa &#x28;East End&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Gloucester&#x29;'>Ottawa &#x28;Gloucester&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Kanata&#x29;'>Ottawa &#x28;Kanata&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Kempville&#x20;Region&#x29;'>Ottawa &#x28;Kempville Region&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Nepean&#x29;'>Ottawa &#x28;Nepean&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Orleans&#x29;'>Ottawa &#x28;Orleans&#x29;</option>
			<option value='Ottawa&#x20;&#x28;Rockland&#x20;Region&#x29;'>Ottawa &#x28;Rockland Region&#x29;</option>
			<option value='Ottawa&#x20;&#x28;South&#x20;End&#x29;'>Ottawa &#x28;South End&#x29;</option>
			<option value='Ottawa&#x20;&#x28;West&#x20;End&#x29;'>Ottawa &#x28;West End&#x29;</option>
			<option value='Ottawa&#x20;-&#x20;Cumberland&#x20;Township'>Ottawa - Cumberland Township</option>
			<option value='Ottawa&#x20;-&#x20;Goulbourn&#x20;Township'>Ottawa - Goulbourn Township</option>
			<option value='Ottawa&#x20;-&#x20;Osgoode&#x20;Township'>Ottawa - Osgoode Township</option>
			<option value='Ottawa&#x20;-&#x20;Rideau&#x20;Township'>Ottawa - Rideau Township</option>
			<option value='Ottawa&#x20;-&#x20;West&#x20;Carleton&#x20;Township'>Ottawa - West Carleton Township</option>
			<option value='Peterborough'>Peterborough</option>
			<option value='Peterborough&#x20;&#x28;Cobourg&#x20;Region&#x29;'>Peterborough &#x28;Cobourg Region&#x29;</option>
			<option value='Peterborough&#x20;&#x28;Lindsay&#x20;Region&#x29;'>Peterborough &#x28;Lindsay Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;Chatham&#x20;Region&#x29;'>SW Ontario &#x28;Chatham Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;Goderich&#x20;Region&#x29;'>SW Ontario &#x28;Goderich Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;London&#x20;Region&#x29;'>SW Ontario &#x28;London Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;Sarnia&#x20;&#x20;Region&#x29;'>SW Ontario &#x28;Sarnia  Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;Tillsonburg&#x20;Region&#x29;'>SW Ontario &#x28;Tillsonburg Region&#x29;</option>
			<option value='SW&#x20;Ontario&#x20;&#x28;Windsor&#x20;Region&#x29;'>SW Ontario &#x28;Windsor Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Far&#x20;North&#x20;Region&#x29;'>Northern Ontario &#x28;Far North Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Kenora&#x20;Region&#x29;'>Northern Ontario &#x28;Kenora Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Sault&#x20;Ste&#x20;Marie&#x20;Region&#x29;'>Northern Ontario &#x28;Sault Ste Marie Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Sudbury&#x20;Region&#x29;'>Northern Ontario &#x28;Sudbury Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Thunder&#x20;Bay&#x20;Region&#x29;'>Northern Ontario &#x28;Thunder Bay Region&#x29;</option>
			<option value='Northern&#x20;Ontario&#x20;&#x28;Timmins&#x20;Region&#x29;'>Northern Ontario &#x28;Timmins Region&#x29;</option>
			<option value='&#x3a;&#x3a;___'>&#x3a;&#x3a;___</option>
			<option value='Bathurst'>Bathurst</option>
			<option value='Campbellton'>Campbellton</option>
			<option value='Edmundston'>Edmundston</option>
			<option value='Fredericton'>Fredericton</option>
			<option value='Miramichi'>Miramichi</option>
			<option value='Moncton'>Moncton</option>
			<option value='Saint&#x20;John,&#x20;NB'>Saint John, NB</option>
			<option value='&#x3a;&#x3a;____'>&#x3a;&#x3a;____</option>
			<option value='Gander'>Gander</option>
			<option value='St-John&#x27;s,&#x20;NL'>St-John&#x27;s, NL</option>
			<option value='Corner&#x20;Brook'>Corner Brook</option>
			<option value='Churchill&#x20;Falls'>Churchill Falls</option>
			<option value='Happy&#x20;Valley-Goose&#x20;Bay'>Happy Valley-Goose Bay</option>
			<option value='Labrador&#x20;City'>Labrador City</option>
			<option value='&#x3a;&#x3a;_____'>&#x3a;&#x3a;_____</option>
			<option value='Annapolis&#x20;Royal'>Annapolis Royal</option>
			<option value='Sydney'>Sydney</option>
			<option value='Guysborough'>Guysborough</option>
			<option value='Truro'>Truro</option>
			<option value='Halifax'>Halifax</option>
			<option value='Pictou'>Pictou</option>
			<option value='Lunenburg'>Lunenburg</option>
			<option value='Yarmouth'>Yarmouth</option>
			<option value='&#x3a;&#x3a;______'>&#x3a;&#x3a;______</option>
			<option value='Summerside'>Summerside</option>
			<option value='Charlottetown'>Charlottetown</option>
			<option value='&#x3a;&#x3a;_______'>&#x3a;&#x3a;_______</option>
			<option value='Yellowknife'>Yellowknife</option>
			<option value='&#x3a;&#x3a;________'>&#x3a;&#x3a;________</option>
			<option value='Iqaluit'>Iqaluit</option>
			<option value='Whitehorse'>Whitehorse</option>
			<option value='&#x3a;&#x3a;_________'>&#x3a;&#x3a;_________</option>
			<option value='Athabasca'>Athabasca</option>
			<option value='Cold&#x20;Lake'>Cold Lake</option>
			<option value='Banff'>Banff</option>
			<option value='Canmore'>Canmore</option>
			<option value='Lake&#x20;Louise'>Lake Louise</option>
			<option value='Airdrie'>Airdrie</option>
			<option value='Beiseker'>Beiseker</option>
			<option value='Black&#x20;Diamond'>Black Diamond</option>
			<option value='Calgary&#x20;NE'>Calgary NE</option>
			<option value='Calgary&#x20;NW'>Calgary NW</option>
			<option value='Calgary&#x20;SE'>Calgary SE</option>
			<option value='Calgary&#x20;SW'>Calgary SW</option>
			<option value='Chestermere'>Chestermere</option>
			<option value='Cochrane'>Cochrane</option>
			<option value='Crossfield'>Crossfield</option>
			<option value='Eden&#x20;Valley&#x20;216'>Eden Valley 216</option>
			<option value='Foothills&#x20;No.&#x20;31,&#x20;MD&#x20;of'>Foothills No. 31, MD of</option>
			<option value='High&#x20;River'>High River</option>
			<option value='Irricana'>Irricana</option>
			<option value='Longview'>Longview</option>
			<option value='Okotoks'>Okotoks</option>
			<option value='Rocky&#x20;View&#x20;County'>Rocky View County</option>
			<option value='Tsuu&#x20;T&#x27;ina&#x20;Nation&#x20;145'>Tsuu T&#x27;ina Nation 145</option>
			<option value='Turner&#x20;Valley'>Turner Valley</option>
			<option value='Consort'>Consort</option>
			<option value='Alexander&#x20;134'>Alexander 134</option>
			<option value='Beaumont'>Beaumont</option>
			<option value='Bon&#x20;Accord'>Bon Accord</option>
			<option value='Bruderheim'>Bruderheim</option>
			<option value='Calmar'>Calmar</option>
			<option value='Devon'>Devon</option>
			<option value='Edmonton&#x20;Central'>Edmonton Central</option>
			<option value='Edmonton&#x20;North&#x20;Sector'>Edmonton North Sector</option>
			<option value='Edmonton&#x20;Northeast&#x20;sector'>Edmonton Northeast sector</option>
			<option value='Edmonton&#x20;Northwest&#x20;sector'>Edmonton Northwest sector</option>
			<option value='Edmonton&#x20;Southeast&#x20;sector'>Edmonton Southeast sector</option>
			<option value='Edmonton&#x20;Southwest&#x20;sector'>Edmonton Southwest sector</option>
			<option value='Edmonton&#x20;West&#x20;sector'>Edmonton West sector</option>
			<option value='Fort&#x20;Saskatchewan'>Fort Saskatchewan</option>
			<option value='Gibbons'>Gibbons</option>
			<option value='Leduc'>Leduc</option>
			<option value='Leduc&#x20;County'>Leduc County</option>
			<option value='Legal'>Legal</option>
			<option value='Morinville'>Morinville</option>
			<option value='Parkland&#x20;County'>Parkland County</option>
			<option value='Redwater'>Redwater</option>
			<option value='Spring&#x20;Lake'>Spring Lake</option>
			<option value='Spruce&#x20;Grove'>Spruce Grove</option>
			<option value='St.&#x20;Albert'>St. Albert</option>
			<option value='Stony&#x20;Plain'>Stony Plain</option>
			<option value='Stony&#x20;Plain&#x20;135'>Stony Plain 135</option>
			<option value='Strathcona&#x20;County'>Strathcona County</option>
			<option value='Sturgeon&#x20;County'>Sturgeon County</option>
			<option value='Thorsby'>Thorsby</option>
			<option value='Wabamun'>Wabamun</option>
			<option value='Wabamun&#x20;133A&nbsp;and&nbsp;133B'>Wabamun 133A&nbsp;and&nbsp;133B</option>
			<option value='Warburg'>Warburg</option>
			<option value='Edson'>Edson</option>
			<option value='Whitecourt'>Whitecourt</option>
			<option value='Fort&#x20;McMurray'>Fort McMurray</option>
			<option value='Grand&#x20;Prarie'>Grand Prarie</option>
			<option value='Jasper'>Jasper</option>
			<option value='Lethbridge'>Lethbridge</option>
			<option value='Lloydminster'>Lloydminster</option>
			<option value='Medicne&#x20;Hat'>Medicne Hat</option>
			<option value='High&#x20;Level'>High Level</option>
			<option value='Red&#x20;Deer'>Red Deer</option>
			<option value='&#x3a;&#x3a;__________'>&#x3a;&#x3a;__________</option>
			<option value='Abbotsford'>Abbotsford</option>
			<option value='Agassiz'>Agassiz</option>
			<option value='Bridal&#x20;Falls'>Bridal Falls</option>
			<option value='Chilliwak'>Chilliwak</option>
			<option value='Harrison&#x20;Hotsprings'>Harrison Hotsprings</option>
			<option value='Harrison&#x20;Mills'>Harrison Mills</option>
			<option value='Hope'>Hope</option>
			<option value='Sunshine&#x20;Valley'>Sunshine Valley</option>
			<option value='Kamloops'>Kamloops</option>
			<option value='Grand&#x20;Forks'>Grand Forks</option>
			<option value='Whistler'>Whistler</option>
			<option value='Fort&#x20;Nelson'>Fort Nelson</option>
			<option value='Prince&#x20;George'>Prince George</option>
			<option value='Kelowna'>Kelowna</option>
			<option value='Vernon'>Vernon</option>
			<option value='Prince&#x20;Rupert'>Prince Rupert</option>
			<option value='Burnaby'>Burnaby</option>
			<option value='Coquitlam'>Coquitlam</option>
			<option value='Delta'>Delta</option>
			<option value='East&#x20;Vancouver'>East Vancouver</option>
			<option value='Langley&#x20;City'>Langley City</option>
			<option value='Maple&#x20;Ridge'>Maple Ridge</option>
			<option value='New&#x20;Westminster'>New Westminster</option>
			<option value='North&#x20;Vancouver'>North Vancouver</option>
			<option value='Richmond'>Richmond</option>
			<option value='Surrey'>Surrey</option>
			<option value='Vancouver'>Vancouver</option>
			<option value='West&#x20;Vancouver'>West Vancouver</option>
			<option value='White&#x20;Rock'>White Rock</option>
			<option value='Alberni&#x20;Valley'>Alberni Valley</option>
			<option value='Campbell&#x20;River'>Campbell River</option>
			<option value='Comox&#x20;Valley'>Comox Valley</option>
			<option value='Cowichan&#x20;Valley'>Cowichan Valley</option>
			<option value='Nanaimo'>Nanaimo</option>
			<option value='Parksville-Qualicum&#x20;Beach'>Parksville-Qualicum Beach</option>
			<option value='Victoria'>Victoria</option>
			<option value='&#x3a;&#x3a;___________'>&#x3a;&#x3a;___________</option>
			<option value='Winnipeg'>Winnipeg</option>
			<option value='Gladstone'>Gladstone</option>
			<option value='Holland'>Holland</option>
			<option value='Portage&#x20;Le&#x20;Prarie'>Portage Le Prarie</option>
			<option value='Morden'>Morden</option>
			<option value='Dauphin'>Dauphin</option>
			<option value='Gimli'>Gimli</option>
			<option value='Beausejour'>Beausejour</option>
			<option value='Brandon'>Brandon</option>
			<option value='Churchill'>Churchill</option>
			<option value='&#x3a;&#x3a;____________'>&#x3a;&#x3a;____________</option>
			<option value='Swift&#x20;Current'>Swift Current</option>
			<option value='Moose&#x20;Jaw'>Moose Jaw</option>
			<option value='Kindersley'>Kindersley</option>
			<option value='Tisdale'>Tisdale</option>
			<option value='Stony&#x20;Rapids'>Stony Rapids</option>
			<option value='Dore&#x20;Lake'>Dore Lake</option>
			<option value='La&#x20;Ronge'>La Ronge</option>
			<option value='North&#x20;Battleford'>North Battleford</option>
			<option value='Prince&#x20;Albert'>Prince Albert</option>
			<option value='Regina'>Regina</option>
			<option value='Saskatoon'>Saskatoon</option>
			<option value='Wayburn'>Wayburn</option>
			<option value='Yorkton'>Yorkton</option>
		</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Lead Source</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='Lead Source'>
			<option value='-None-'>-None-</option>
			<option value='Select&#x20;Lead&#x20;Source'>Select Lead Source</option>
			<option value='Advertising'>Advertising</option>
			<option value='Business&#x20;Card'>Business Card</option>
			<option value='Call'>Call</option>
			<option value='Conference'>Conference</option>
			<option value='Email'>Email</option>
			<option value='Ex-Client'>Ex-Client</option>
			<option value='Internet&#x20;Marketing'>Internet Marketing</option>
			<option value='List&#x20;of&#x20;Leads'>List of Leads</option>
			<option value='Met&#x20;in&#x20;Public'>Met in Public</option>
			<option value='Other&#x20;Lead&#x20;Source'>Other Lead Source</option>
			<option value='Presentation'>Presentation</option>
			<option value='Referral'>Referral</option>
		<option selected value='Referral&#x20;Agreements'>Referral Agreements</option>
		</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Lead Sub-Source</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='LEADCF30'>
		<option selected value='Select&#x20;Sub-Source'>Select Sub-Source</option>
			<option value='-None-'>-None-</option>
			<option value='Ad&#x20;-&#x20;Classified'>Ad - Classified</option>
			<option value='Ad&#x20;-&#x20;Directory'>Ad - Directory</option>
			<option value='Ad&#x20;-&#x20;Magazine'>Ad - Magazine</option>
			<option value='Ad&#x20;-&#x20;Newspaper'>Ad - Newspaper</option>
			<option value='Ad&#x20;-&#x20;Radio'>Ad - Radio</option>
			<option value='Ad&#x20;-&#x20;Television'>Ad - Television</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;1'>Business Card Display 1</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;2'>Business Card Display 2</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;3'>Business Card Display 3</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;4'>Business Card Display 4</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;5'>Business Card Display 5</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;6'>Business Card Display 6</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;7'>Business Card Display 7</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;8'>Business Card Display 8</option>
			<option value='Business&#x20;Card&#x20;Display&#x20;9'>Business Card Display 9</option>
			<option value='Captive&#x20;Ex-Client'>Captive Ex-Client</option>
			<option value='Client&#x20;Call&#x20;-&#x20;Inbound'>Client Call - Inbound</option>
			<option value='Client&#x20;Call&#x20;-&#x20;Outbound'>Client Call - Outbound</option>
			<option value='Cold&#x20;Call'>Cold Call</option>
			<option value='Conference&#x20;1'>Conference 1</option>
			<option value='Conference&#x20;2'>Conference 2</option>
			<option value='Conference&#x20;3'>Conference 3</option>
			<option value='Conference&#x20;4'>Conference 4</option>
			<option value='Conference&#x20;5'>Conference 5</option>
			<option value='Email&#x20;&#x28;Inbound&#x29;'>Email &#x28;Inbound&#x29;</option>
			<option value='Email&#x20;&#x28;Outbound&#x29;'>Email &#x28;Outbound&#x29;</option>
			<option value='Facebook&#x20;&#x28;Business&#x29;'>Facebook &#x28;Business&#x29;</option>
			<option value='Facebook&#x20;&#x28;Personal&#x29;'>Facebook &#x28;Personal&#x29;</option>
			<option value='Google&#x20;AdSense'>Google AdSense</option>
			<option value='Google&#x20;AdWords'>Google AdWords</option>
			<option value='Internet&#x20;-&#x20;Chat'>Internet - Chat</option>
			<option value='Internet&#x20;-&#x20;Classified&#x20;Ads'>Internet - Classified Ads</option>
			<option value='Internet&#x20;-&#x20;Other'>Internet - Other</option>
			<option value='LinkedIn&#x20;&#x28;Business&#x29;'>LinkedIn &#x28;Business&#x29;</option>
			<option value='LinkedIn&#x20;&#x28;Profile&#x29;'>LinkedIn &#x28;Profile&#x29;</option>
			<option value='List&#x20;of&#x20;Leads&#x20;1'>List of Leads 1</option>
			<option value='List&#x20;of&#x20;Leads&#x20;2'>List of Leads 2</option>
			<option value='List&#x20;of&#x20;Leads&#x20;3'>List of Leads 3</option>
			<option value='List&#x20;of&#x20;Leads&#x20;4'>List of Leads 4</option>
			<option value='List&#x20;of&#x20;Leads&#x20;5'>List of Leads 5</option>
			<option value='Met&#x20;in&#x20;Public&#x20;-&#x20;Gym'>Met in Public - Gym</option>
			<option value='Met&#x20;in&#x20;Public&#x20;-&#x20;Other'>Met in Public - Other</option>
			<option value='Met&#x20;in&#x20;Public&#x20;-&#x20;Random'>Met in Public - Random</option>
			<option value='Met&#x20;in&#x20;Public&#x20;-&#x20;School'>Met in Public - School</option>
			<option value='Other&#x20;Lead&#x20;Sub-Source'>Other Lead Sub-Source</option>
			<option value='Presentation&#x20;1'>Presentation 1</option>
			<option value='Presentation&#x20;2'>Presentation 2</option>
			<option value='Presentation&#x20;3'>Presentation 3</option>
			<option value='Presentation&#x20;4'>Presentation 4</option>
			<option value='Presentation&#x20;5'>Presentation 5</option>
			<option value='Referral&#x20;Agreement&#x20;Josee&#x20;Lafortune'>Referral Agreement Josee Lafortune</option>
			<option value='Referral&#x20;Agreement&#x20;Vanessa&#x20;Gagnon'>Referral Agreement Vanessa Gagnon</option>
			<option value='Referral&#x20;Agreement&#x20;3'>Referral Agreement 3</option>
			<option value='Referral&#x20;Agreement&#x20;4'>Referral Agreement 4</option>
			<option value='Referral&#x20;Agreement&#x20;5'>Referral Agreement 5</option>
			<option value='Referral&#x20;Agreement&#x20;6'>Referral Agreement 6</option>
			<option value='Referral&#x20;Agreement&#x20;Orbis'>Referral Agreement Orbis</option>
			<option value='Referral&#x20;Agreement&#x20;7'>Referral Agreement 7</option>
			<option value='Referral&#x20;Agreement&#x20;8'>Referral Agreement 8</option>
			<option value='Referral&#x20;Agreement&#x20;9'>Referral Agreement 9</option>
			<option value='Referral&#x20;by&#x20;Client'>Referral by Client</option>
			<option value='Referral&#x20;by&#x20;COI'>Referral by COI</option>
			<option value='Referral&#x20;by&#x20;Family&#x20;or&#x20;Friend'>Referral by Family or Friend</option>
			<option value='Referral&#x20;by&#x20;Insurer'>Referral by Insurer</option>
			<option value='Referral&#x20;by&#x20;MGA'>Referral by MGA</option>
			<option value='Referral&#x20;by&#x20;Other&#x20;Source'>Referral by Other Source</option>
			<option value='Seminar&#x20;1'>Seminar 1</option>
			<option value='Seminar&#x20;2'>Seminar 2</option>
			<option value='Seminar&#x20;3'>Seminar 3</option>
			<option value='Seminar&#x20;4'>Seminar 4</option>
			<option value='Seminar&#x20;5'>Seminar 5</option>
			<option value='Web&#x20;Site'>Web Site</option>
			<option value='Webinar&#x20;1'>Webinar 1</option>
			<option value='Webinar&#x20;2'>Webinar 2</option>
			<option value='Webinar&#x20;3'>Webinar 3</option>
			<option value='Webinar&#x20;4'>Webinar 4</option>
			<option value='Webinar&#x20;5'>Webinar 5</option>
			<option value='YouTube'>YouTube</option>
		</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Rating</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='Rating'>
			<option value='-None-'>-None-</option>
		<option selected value='Hot'>Hot</option>
			<option value='Fair'>Fair</option>
			<option value='Cold'>Cold</option>
		</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:right;font-size:12px;font-family:Verdana;width:30%'>Service Types</td><td style='width:40%;'>
		<select style='width:100%;box-sizing:border-box;' name='LEADCF34' multiple>
			<option value='Accounting'>Accounting</option>
			<option value='Banking'>Banking</option>
			<option value='Insurance&#x20;-&#x20;Commercial'>Insurance - Commercial</option>
			<option value='Insurance&#x20;-&#x20;Group'>Insurance - Group</option>
		<option selected value='Insurance&#x20;-&#x20;Personal'>Insurance - Personal</option>
			<option value='Insurance&#x20;-&#x20;Property'>Insurance - Property</option>
			<option value='Investments&#x20;-&#x20;Annuity'>Investments - Annuity</option>
			<option value='Investments&#x20;-&#x20;Mutual&#x20;Funds'>Investments - Mutual Funds</option>
			<option value='Investments&#x20;-&#x20;Other'>Investments - Other</option>
			<option value='Investments&#x20;-&#x20;Segregated&#x20;Funds'>Investments - Segregated Funds</option>
			<option value='Mortgage'>Mortgage</option>
			<option value='Other&#x20;Services'>Other Services</option>
			<option value='Tax&#x20;Services'>Tax Services</option>
		</select></td><td style='width:30%;'></td></tr>

	<tr><td colspan='2' style='text-align:center; padding-top:15px;font-size:12px;'>
		<input style='margin-right: 5px;cursor: pointer;font-size:12px;color:#000000' id='formsubmit' type='submit' value=' Soumettre ce client'  ></input> <input type='reset' name='reset' style='cursor: pointer;font-size:12px;color:#000000' value=' Réinitialiser' ></input> </td></tr></table>
	<script>
 	  var mndFileds=new Array('Phone','Last Name','First Name','LEADCF155');
 	  var fldLangVal=new Array('Téléphone','Nom de famille du client','Prénom du client','Qui réfère ce prospect?'); 
		var name='';
		var email='';

 	  function checkMandatory4480440000000250008() {
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads4480440000000250008'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(${regex}, '')).length==0) {
			 if(fieldObj.type =='file')
				{ 
				 alert('Please select a file to upload.'); 
				 fieldObj.focus(); 
				 return false;
				} 
			alert(fldLangVal[i] +' cannot be empty.'); 
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none.'); 
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   } 
			 } 
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		 return validateFileUpload();

		document.getElementById('formsubmit').disabled=true;
	}function validateFileUpload(){
		 var uploadedFiles = document.getElementById('theFile'); 
		 var totalFileSize =0; 
		 if(uploadedFiles.files.length >3){ 
			 alert('You can upload a maximum of three files at a time.'); 
			 return false; 
		 } 
		 if ('files' in uploadedFiles) { 
			 if (uploadedFiles.files.length != 0) { 
				 for (var i = 0; i < uploadedFiles.files.length; i++) { 
					 var file = uploadedFiles.files[i]; 
					 if ('size' in file) { 
						 totalFileSize = totalFileSize + file.size; 
					 } 
				 } 
				 if(totalFileSize > 20971520){ 
					 alert('Total file(s) size should not exceed 20MB.'); 
					 return false; 
				 } 
			 } 
		 } 
	 }
</script>
	</form>
</div>`

const ZohoForm = ({ language }) => {
    const htmlString = language === 'fr' ? zohoStringFR : zohoStringEN;
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </>
    );
};

ZohoForm.propTypes = {
    language: PropTypes.string,
};

ZohoForm.defaultProps = {
    language: 'en',
};

export default ZohoForm;
