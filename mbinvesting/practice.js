


const res = require('./fullResponse.json')

var result = `INSERT INTO companyiex(symbol, companyName, exchange, industry, sector, CEO, securityName) VALUES('${res.PG.company.symbol}', '${res.PG.company.companyName}', '${res.PG.company.exchange}','${res.PG.company.industry}', '${res.PG.company.sector}', '${res.PG.company.CEO}', '${res.PG.company.securityName}'),
('${res.VZ.company.symbol}', '${res.VZ.company.companyName}', '${res.VZ.company.exchange}','${res.VZ.company.industry}', '${res.VZ.company.sector}', '${res.VZ.company.CEO}', '${res.VZ.company.securityName}'),
('${res.MRK.company.symbol}', '${res.MRK.company.companyName}', '${res.MRK.company.exchange}','${res.MRK.company.industry}', '${res.MRK.company.sector}', '${res.MRK.company.CEO}', '${res.MRK.company.securityName}'),
('${res.CMCSA.company.symbol}', '${res.CMCSA.company.companyName}', '${res.CMCSA.company.exchange}','${res.CMCSA.company.industry}', '${res.CMCSA.company.sector}', '${res.CMCSA.company.CEO}', '${res.CMCSA.company.securityName}'),
('${res.ORCL.company.symbol}', '${res.ORCL.company.companyName}', '${res.ORCL.company.exchange}','${res.ORCL.company.industry}', '${res.ORCL.company.sector}', '${res.ORCL.company.CEO}', '${res.ORCL.company.securityName}'),
('${res.NKE.company.symbol}', '${res.NKE.company.companyName}', '${res.NKE.company.exchange}','${res.NKE.company.industry}', '${res.NKE.company.sector}', '${res.NKE.company.CEO}', '${res.NKE.company.securityName}'),
('${res.AMGN.company.symbol}', '${res.AMGN.company.companyName}', '${res.AMGN.company.exchange}','${res.AMGN.company.industry}', '${res.AMGN.company.sector}', '${res.AMGN.company.CEO}', '${res.AMGN.company.securityName}'),
('${res.SBUX.company.symbol}', '${res.SBUX.company.companyName}', '${res.SBUX.company.exchange}','${res.SBUX.company.industry}', '${res.SBUX.company.sector}', '${res.SBUX.company.CEO}', '${res.SBUX.company.securityName}'),
('${res.DHR.company.symbol}', '${res.DHR.company.companyName}', '${res.DHR.company.exchange}','${res.DHR.company.industry}', '${res.DHR.company.sector}', '${res.DHR.company.CEO}', '${res.DHR.company.securityName}'),
('${res.BMY.company.symbol}', '${res.BMY.company.companyName}', '${res.BMY.company.exchange}','${res.BMY.company.industry}', '${res.BMY.company.sector}', '${res.BMY.company.CEO}', '${res.BMY.company.securityName}'),
('${res.SYK.company.symbol}', '${res.SYK.company.companyName}', '${res.SYK.company.exchange}','${res.SYK.company.industry}', '${res.SYK.company.sector}', '${res.SYK.company.CEO}', '${res.SYK.company.securityName}'),
('${res.MS.company.symbol}', '${res.MS.company.companyName}', '${res.MS.company.exchange}','${res.MS.company.industry}', '${res.MS.company.sector}', '${res.MS.company.CEO}', '${res.MS.company.securityName}'),
('${res.CELG.company.symbol}', '${res.CELG.company.companyName}', '${res.CELG.company.exchange}','${res.CELG.company.industry}', '${res.CELG.company.sector}', '${res.CELG.company.CEO}', '${res.CELG.company.securityName}'),
('${res.CI.company.symbol}', '${res.CI.company.companyName}', '${res.CI.company.exchange}','${res.CI.company.industry}', '${res.CI.company.sector}', '${res.CI.company.CEO}', '${res.CI.company.securityName}'),
('${res.TGT.company.symbol}', '${res.TGT.company.companyName}', '${res.TGT.company.exchange}','${res.TGT.company.industry}', '${res.TGT.company.sector}', '${res.TGT.company.CEO}', '${res.TGT.company.securityName}'),
('${res.AEP.company.symbol}', '${res.AEP.company.companyName}', '${res.AEP.company.exchange}','${res.AEP.company.industry}', '${res.AEP.company.sector}', '${res.AEP.company.CEO}', '${res.AEP.company.securityName}'),
('${res.BIIB.company.symbol}', '${res.BIIB.company.companyName}', '${res.BIIB.company.exchange}','${res.BIIB.company.industry}', '${res.BIIB.company.sector}', '${res.BIIB.company.CEO}', '${res.BIIB.company.securityName}'),
('${res.FISV.company.symbol}', '${res.FISV.company.companyName}', '${res.FISV.company.exchange}','${res.FISV.company.industry}', '${res.FISV.company.sector}', '${res.FISV.company.CEO}', '${res.FISV.company.securityName}'),
('${res.DAL.company.symbol}', '${res.DAL.company.companyName}', '${res.DAL.company.exchange}','${res.DAL.company.industry}', '${res.DAL.company.sector}', '${res.DAL.company.CEO}', '${res.DAL.company.securityName}'),
('${res.MFC.company.symbol}', '${res.MFC.company.companyName}', '${res.MFC.company.exchange}','${res.MFC.company.industry}', '${res.MFC.company.sector}', '${res.MFC.company.CEO}', '${res.MFC.company.securityName}'),
('${res.ALL.company.symbol}', '${res.ALL.company.companyName}', '${res.ALL.company.exchange}','${res.ALL.company.industry}', '${res.ALL.company.sector}', '${res.ALL.company.CEO}', '${res.ALL.company.securityName}'),
('${res.TRI.company.symbol}', '${res.TRI.company.companyName}', '${res.TRI.company.exchange}','${res.TRI.company.industry}', '${res.TRI.company.sector}', '${res.TRI.company.CEO}', '${res.TRI.company.securityName}'),
('${res.HSY.company.symbol}', '${res.HSY.company.companyName}', '${res.HSY.company.exchange}','${res.HSY.company.industry}', '${res.HSY.company.sector}', '${res.HSY.company.CEO}', '${res.HSY.company.securityName}'),
('${res.IQV.company.symbol}', '${res.IQV.company.companyName}', '${res.IQV.company.exchange}','${res.IQV.company.industry}', '${res.IQV.company.sector}', '${res.IQV.company.CEO}', '${res.IQV.company.securityName}'),
('${res.LUV.company.symbol}', '${res.LUV.company.companyName}', '${res.LUV.company.exchange}','${res.LUV.company.industry}', '${res.LUV.company.sector}', '${res.LUV.company.CEO}', '${res.LUV.company.securityName}'),
('${res.RACE.company.symbol}', '${res.RACE.company.companyName}', '${res.RACE.company.exchange}','${res.RACE.company.industry}', '${res.RACE.company.sector}', '${res.RACE.company.CEO}', '${res.RACE.company.securityName}'),
('${res.DFS.company.symbol}', '${res.DFS.company.companyName}', '${res.DFS.company.exchange}','${res.DFS.company.industry}', '${res.DFS.company.sector}', '${res.DFS.company.CEO}', '${res.DFS.company.securityName}'),
('${res.MCK.company.symbol}', '${res.MCK.company.companyName}', '${res.MCK.company.exchange}','${res.MCK.company.industry}', '${res.MCK.company.sector}', '${res.MCK.company.CEO}', '${res.MCK.company.securityName}'),
('${res.ALXN.company.symbol}', '${res.ALXN.company.companyName}', '${res.ALXN.company.exchange}','${res.ALXN.company.industry}', '${res.ALXN.company.sector}', '${res.ALXN.company.CEO}', '${res.ALXN.company.securityName}'),
('${res.FNMA.company.symbol}', '${res.FNMA.company.companyName}', '${res.FNMA.company.exchange}','${res.FNMA.company.industry}', '${res.FNMA.company.sector}', '${res.FNMA.company.CEO}', '${res.FNMA.company.securityName}'),
('${res.CERN.company.symbol}', '${res.CERN.company.companyName}', '${res.CERN.company.exchange}','${res.CERN.company.industry}', '${res.CERN.company.sector}', '${res.CERN.company.CEO}', '${res.CERN.company.securityName}'),
('${res.HIG.company.symbol}', '${res.HIG.company.companyName}', '${res.HIG.company.exchange}','${res.HIG.company.industry}', '${res.HIG.company.sector}', '${res.HIG.company.CEO}', '${res.HIG.company.securityName}'),
('${res.SNPS.company.symbol}', '${res.SNPS.company.companyName}', '${res.SNPS.company.exchange}','${res.SNPS.company.industry}', '${res.SNPS.company.sector}', '${res.SNPS.company.CEO}', '${res.SNPS.company.securityName}'),
('${res.KEYS.company.symbol}', '${res.KEYS.company.companyName}', '${res.KEYS.company.exchange}','${res.KEYS.company.industry}', '${res.KEYS.company.sector}', '${res.KEYS.company.CEO}', '${res.KEYS.company.securityName}'),
('${res.CPRT.company.symbol}', '${res.CPRT.company.companyName}', '${res.CPRT.company.exchange}','${res.CPRT.company.industry}', '${res.CPRT.company.sector}', '${res.CPRT.company.CEO}', '${res.CPRT.company.securityName}'),
('${res.CDNS.company.symbol}', '${res.CDNS.company.companyName}', '${res.CDNS.company.exchange}','${res.CDNS.company.industry}', '${res.CDNS.company.sector}', '${res.CDNS.company.CEO}', '${res.CDNS.company.securityName}'),
('${res.CHD.company.symbol}', '${res.CHD.company.companyName}', '${res.CHD.company.exchange}','${res.CHD.company.industry}', '${res.CHD.company.sector}', '${res.CHD.company.CEO}', '${res.CHD.company.securityName}'),
('${res.CDW.company.symbol}', '${res.CDW.company.companyName}', '${res.CDW.company.exchange}','${res.CDW.company.industry}', '${res.CDW.company.sector}', '${res.CDW.company.CEO}', '${res.CDW.company.securityName}'),
('${res.HEI.company.symbol}', '${res.HEI.company.companyName}', '${res.HEI.company.exchange}','${res.HEI.company.industry}', '${res.HEI.company.sector}', '${res.HEI.company.CEO}', '${res.HEI.company.securityName}'),
('${res.OMC.company.symbol}', '${res.OMC.company.companyName}', '${res.OMC.company.exchange}','${res.OMC.company.industry}', '${res.OMC.company.sector}', '${res.OMC.company.CEO}', '${res.OMC.company.securityName}'),
('${res.LH.company.symbol}', '${res.LH.company.companyName}', '${res.LH.company.exchange}','${res.LH.company.industry}', '${res.LH.company.sector}', '${res.LH.company.CEO}', '${res.LH.company.securityName}'),
('${res.HBAN.company.symbol}', '${res.HBAN.company.companyName}', '${res.HBAN.company.exchange}','${res.HBAN.company.industry}', '${res.HBAN.company.sector}', '${res.HBAN.company.CEO}', '${res.HBAN.company.securityName}'),
('${res.HAS.company.symbol}', '${res.HAS.company.companyName}', '${res.HAS.company.exchange}','${res.HAS.company.industry}', '${res.HAS.company.sector}', '${res.HAS.company.CEO}', '${res.HAS.company.securityName}'),
('${res.DISCA.company.symbol}', '${res.DISCA.company.companyName}', '${res.DISCA.company.exchange}','${res.DISCA.company.industry}', '${res.DISCA.company.sector}', '${res.DISCA.company.CEO}', '${res.DISCA.company.securityName}'),
('${res.HOLX.company.symbol}', '${res.HOLX.company.companyName}', '${res.HOLX.company.exchange}','${res.HOLX.company.industry}', '${res.HOLX.company.sector}', '${res.HOLX.company.CEO}', '${res.HOLX.company.securityName}'),
('${res.ALLY.company.symbol}', '${res.ALLY.company.companyName}', '${res.ALLY.company.exchange}','${res.ALLY.company.industry}', '${res.ALLY.company.sector}', '${res.ALLY.company.CEO}', '${res.ALLY.company.securityName}'),
('${res.WRB.company.symbol}', '${res.WRB.company.companyName}', '${res.WRB.company.exchange}','${res.WRB.company.industry}', '${res.WRB.company.sector}', '${res.WRB.company.CEO}', '${res.WRB.company.securityName}'),
('${res.LDOS.company.symbol}', '${res.LDOS.company.companyName}', '${res.LDOS.company.exchange}','${res.LDOS.company.industry}', '${res.LDOS.company.sector}', '${res.LDOS.company.CEO}', '${res.LDOS.company.securityName}'),
('${res.FNF.company.symbol}', '${res.FNF.company.companyName}', '${res.FNF.company.exchange}','${res.FNF.company.industry}', '${res.FNF.company.sector}', '${res.FNF.company.CEO}', '${res.FNF.company.securityName}'),
('${res.ARNC.company.symbol}', '${res.ARNC.company.companyName}', '${res.ARNC.company.exchange}','${res.ARNC.company.industry}', '${res.ARNC.company.sector}', '${res.ARNC.company.CEO}', '${res.ARNC.company.securityName}'),
('${res.ZBRA.company.symbol}', '${res.ZBRA.company.companyName}', '${res.ZBRA.company.exchange}','${res.ZBRA.company.industry}', '${res.ZBRA.company.sector}', '${res.ZBRA.company.CEO}', '${res.ZBRA.company.securityName}'),
('${res.OTEX.company.symbol}', '${res.OTEX.company.companyName}', '${res.OTEX.company.exchange}','${res.OTEX.company.industry}', '${res.OTEX.company.sector}', '${res.OTEX.company.CEO}', '${res.OTEX.company.securityName}'),
('${res.RNG.company.symbol}', '${res.RNG.company.companyName}', '${res.RNG.company.exchange}','${res.RNG.company.industry}', '${res.RNG.company.sector}', '${res.RNG.company.CEO}', '${res.RNG.company.securityName}'),
('${res.EQH.company.symbol}', '${res.EQH.company.companyName}', '${res.EQH.company.exchange}','${res.EQH.company.industry}', '${res.EQH.company.sector}', '${res.EQH.company.CEO}', '${res.EQH.company.securityName}'),
('${res.WST.company.symbol}', '${res.WST.company.companyName}', '${res.WST.company.exchange}','${res.WST.company.industry}', '${res.WST.company.sector}', '${res.WST.company.CEO}', '${res.WST.company.securityName}'),
('${res.URI.company.symbol}', '${res.URI.company.companyName}', '${res.URI.company.exchange}','${res.URI.company.industry}', '${res.URI.company.sector}', '${res.URI.company.CEO}', '${res.URI.company.securityName}'),
('${res.BAH.company.symbol}', '${res.BAH.company.companyName}', '${res.BAH.company.exchange}','${res.BAH.company.industry}', '${res.BAH.company.sector}', '${res.BAH.company.CEO}', '${res.BAH.company.securityName}'),
('${res.DVA.company.symbol}', '${res.DVA.company.companyName}', '${res.DVA.company.exchange}','${res.DVA.company.industry}', '${res.DVA.company.sector}', '${res.DVA.company.CEO}', '${res.DVA.company.securityName}'),
('${res.AZPN.company.symbol}', '${res.AZPN.company.companyName}', '${res.AZPN.company.exchange}','${res.AZPN.company.industry}', '${res.AZPN.company.sector}', '${res.AZPN.company.CEO}', '${res.AZPN.company.securityName}'),
('${res.ARCC.company.symbol}', '${res.ARCC.company.companyName}', '${res.ARCC.company.exchange}','${res.ARCC.company.industry}', '${res.ARCC.company.sector}', '${res.ARCC.company.CEO}', '${res.ARCC.company.securityName}'),
('${res.VOYA.company.symbol}', '${res.VOYA.company.companyName}', '${res.VOYA.company.exchange}','${res.VOYA.company.industry}', '${res.VOYA.company.sector}', '${res.VOYA.company.CEO}', '${res.VOYA.company.securityName}'),
('${res.AER.company.symbol}', '${res.AER.company.companyName}', '${res.AER.company.exchange}','${res.AER.company.industry}', '${res.AER.company.sector}', '${res.AER.company.CEO}', '${res.AER.company.securityName}'),
('${res.HUBS.company.symbol}', '${res.HUBS.company.companyName}', '${res.HUBS.company.exchange}','${res.HUBS.company.industry}', '${res.HUBS.company.sector}', '${res.HUBS.company.CEO}', '${res.HUBS.company.securityName}'),
('${res.FAF.company.symbol}', '${res.FAF.company.companyName}', '${res.FAF.company.exchange}','${res.FAF.company.industry}', '${res.FAF.company.sector}', '${res.FAF.company.CEO}', '${res.FAF.company.securityName}'),
('${res.HAE.company.symbol}', '${res.HAE.company.companyName}', '${res.HAE.company.exchange}','${res.HAE.company.industry}', '${res.HAE.company.sector}', '${res.HAE.company.CEO}', '${res.HAE.company.securityName}'),
('${res.CIEN.company.symbol}', '${res.CIEN.company.companyName}', '${res.CIEN.company.exchange}','${res.CIEN.company.industry}', '${res.CIEN.company.sector}', '${res.CIEN.company.CEO}', '${res.CIEN.company.securityName}'),
('${res.ICL.company.symbol}', '${res.ICL.company.companyName}', '${res.ICL.company.exchange}','${res.ICL.company.industry}', '${res.ICL.company.sector}', '${res.ICL.company.CEO}', '${res.ICL.company.securityName}'),
('${res.INXN.company.symbol}', '${res.INXN.company.companyName}', '${res.INXN.company.exchange}','${res.INXN.company.industry}', '${res.INXN.company.sector}', '${res.INXN.company.CEO}', '${res.INXN.company.securityName}'),
('${res.ALSN.company.symbol}', '${res.ALSN.company.companyName}', '${res.ALSN.company.exchange}','${res.ALSN.company.industry}', '${res.ALSN.company.sector}', '${res.ALSN.company.CEO}', '${res.ALSN.company.securityName}'),
('${res.MDU.company.symbol}', '${res.MDU.company.companyName}', '${res.MDU.company.exchange}','${res.MDU.company.industry}', '${res.MDU.company.sector}', '${res.MDU.company.CEO}', '${res.MDU.company.securityName}'),
('${res.IART.company.symbol}', '${res.IART.company.companyName}', '${res.IART.company.exchange}','${res.IART.company.industry}', '${res.IART.company.sector}', '${res.IART.company.CEO}', '${res.IART.company.securityName}'),
('${res.BPOP.company.symbol}', '${res.BPOP.company.companyName}', '${res.BPOP.company.exchange}','${res.BPOP.company.industry}', '${res.BPOP.company.sector}', '${res.BPOP.company.CEO}', '${res.BPOP.company.securityName}'),
('${res.OMF.company.symbol}', '${res.OMF.company.companyName}', '${res.OMF.company.exchange}','${res.OMF.company.industry}', '${res.OMF.company.sector}', '${res.OMF.company.CEO}', '${res.OMF.company.securityName}'),
('${res.EV.company.symbol}', '${res.EV.company.companyName}', '${res.EV.company.exchange}','${res.EV.company.industry}', '${res.EV.company.sector}', '${res.EV.company.CEO}', '${res.EV.company.securityName}'),
('${res.FHN.company.symbol}', '${res.FHN.company.companyName}', '${res.FHN.company.exchange}','${res.FHN.company.industry}', '${res.FHN.company.sector}', '${res.FHN.company.CEO}', '${res.FHN.company.securityName}'),
('${res.JBLU.company.symbol}', '${res.JBLU.company.companyName}', '${res.JBLU.company.exchange}','${res.JBLU.company.industry}', '${res.JBLU.company.sector}', '${res.JBLU.company.CEO}', '${res.JBLU.company.securityName}'),
('${res.MTZ.company.symbol}', '${res.MTZ.company.companyName}', '${res.MTZ.company.exchange}','${res.MTZ.company.industry}', '${res.MTZ.company.sector}', '${res.MTZ.company.CEO}', '${res.MTZ.company.securityName}'),
('${res.ESNT.company.symbol}', '${res.ESNT.company.companyName}', '${res.ESNT.company.exchange}','${res.ESNT.company.industry}', '${res.ESNT.company.sector}', '${res.ESNT.company.CEO}', '${res.ESNT.company.securityName}'),
('${res.RDN.company.symbol}', '${res.RDN.company.companyName}', '${res.RDN.company.exchange}','${res.RDN.company.industry}', '${res.RDN.company.sector}', '${res.RDN.company.CEO}', '${res.RDN.company.securityName}'),
('${res.AWI.company.symbol}', '${res.AWI.company.companyName}', '${res.AWI.company.exchange}','${res.AWI.company.industry}', '${res.AWI.company.sector}', '${res.AWI.company.CEO}', '${res.AWI.company.securityName}'),
('${res.TTEK.company.symbol}', '${res.TTEK.company.companyName}', '${res.TTEK.company.exchange}','${res.TTEK.company.industry}', '${res.TTEK.company.sector}', '${res.TTEK.company.CEO}', '${res.TTEK.company.securityName}'),
('${res.AGO.company.symbol}', '${res.AGO.company.companyName}', '${res.AGO.company.exchange}','${res.AGO.company.industry}', '${res.AGO.company.sector}', '${res.AGO.company.CEO}', '${res.AGO.company.securityName}'),
('${res.FTDR.company.symbol}', '${res.FTDR.company.companyName}', '${res.FTDR.company.exchange}','${res.FTDR.company.industry}', '${res.FTDR.company.sector}', '${res.FTDR.company.CEO}', '${res.FTDR.company.securityName}'),
('${res.SEDG.company.symbol}', '${res.SEDG.company.companyName}', '${res.SEDG.company.exchange}','${res.SEDG.company.industry}', '${res.SEDG.company.sector}', '${res.SEDG.company.CEO}', '${res.SEDG.company.securityName}'),
('${res.AAN.company.symbol}', '${res.AAN.company.companyName}', '${res.AAN.company.exchange}','${res.AAN.company.industry}', '${res.AAN.company.sector}', '${res.AAN.company.CEO}', '${res.AAN.company.securityName}'),
('${res.FCN.company.symbol}', '${res.FCN.company.companyName}', '${res.FCN.company.exchange}','${res.FCN.company.industry}', '${res.FCN.company.sector}', '${res.FCN.company.CEO}', '${res.FCN.company.securityName}'),
('${res.SF.company.symbol}', '${res.SF.company.companyName}', '${res.SF.company.exchange}','${res.SF.company.industry}', '${res.SF.company.sector}', '${res.SF.company.CEO}', '${res.SF.company.securityName}'),
('${res.FNB.company.symbol}', '${res.FNB.company.companyName}', '${res.FNB.company.exchange}','${res.FNB.company.industry}', '${res.FNB.company.sector}', '${res.FNB.company.CEO}', '${res.FNB.company.securityName}'),
('${res.UMPQ.company.symbol}', '${res.UMPQ.company.companyName}', '${res.UMPQ.company.exchange}','${res.UMPQ.company.industry}', '${res.UMPQ.company.sector}', '${res.UMPQ.company.CEO}', '${res.UMPQ.company.securityName}'),
('${res.JJSF.company.symbol}', '${res.JJSF.company.companyName}', '${res.JJSF.company.exchange}','${res.JJSF.company.industry}', '${res.JJSF.company.sector}', '${res.JJSF.company.CEO}', '${res.JJSF.company.securityName}'),
('${res.LM.company.symbol}', '${res.LM.company.companyName}', '${res.LM.company.exchange}','${res.LM.company.industry}', '${res.LM.company.sector}', '${res.LM.company.CEO}', '${res.LM.company.securityName}'),
('${res.GLOB.company.symbol}', '${res.GLOB.company.companyName}', '${res.GLOB.company.exchange}','${res.GLOB.company.industry}', '${res.GLOB.company.sector}', '${res.GLOB.company.CEO}', '${res.GLOB.company.securityName}'),
('${res.ENPH.company.symbol}', '${res.ENPH.company.companyName}', '${res.ENPH.company.exchange}','${res.ENPH.company.industry}', '${res.ENPH.company.sector}', '${res.ENPH.company.CEO}', '${res.ENPH.company.securityName}'),
('${res.FII.company.symbol}', '${res.FII.company.companyName}', '${res.FII.company.exchange}','${res.FII.company.industry}', '${res.FII.company.sector}', '${res.FII.company.CEO}', '${res.FII.company.securityName}'),
('${res.CRUS.company.symbol}', '${res.CRUS.company.companyName}', '${res.CRUS.company.exchange}','${res.CRUS.company.industry}', '${res.CRUS.company.sector}', '${res.CRUS.company.CEO}', '${res.CRUS.company.securityName}'),
('${res.MEDP.company.symbol}', '${res.MEDP.company.companyName}', '${res.MEDP.company.exchange}','${res.MEDP.company.industry}', '${res.MEDP.company.sector}', '${res.MEDP.company.CEO}', '${res.MEDP.company.securityName}'),
('${res.HLI.company.symbol}', '${res.HLI.company.companyName}', '${res.HLI.company.exchange}','${res.HLI.company.industry}', '${res.HLI.company.sector}', '${res.HLI.company.CEO}', '${res.HLI.company.securityName}'),
('${res.WAFD.company.symbol}', '${res.WAFD.company.companyName}', '${res.WAFD.company.exchange}','${res.WAFD.company.industry}', '${res.WAFD.company.sector}', '${res.WAFD.company.CEO}', '${res.WAFD.company.securityName}'),
('${res.CATY.company.symbol}', '${res.CATY.company.companyName}', '${res.CATY.company.exchange}','${res.CATY.company.industry}', '${res.CATY.company.sector}', '${res.CATY.company.CEO}', '${res.CATY.company.securityName}'),
('${res.FULT.company.symbol}', '${res.FULT.company.companyName}', '${res.FULT.company.exchange}','${res.FULT.company.industry}', '${res.FULT.company.sector}', '${res.FULT.company.CEO}', '${res.FULT.company.securityName}'),
('${res.BAC.company.symbol}', '${res.BAC.company.companyName}', '${res.BAC.company.exchange}','${res.BAC.company.industry}', '${res.BAC.company.sector}', '${res.BAC.company.CEO}', '${res.BAC.company.securityName}'),
('${res.BHC.company.symbol}', '${res.BHC.company.companyName}', '${res.BHC.company.exchange}','${res.BHC.company.industry}', '${res.BHC.company.sector}', '${res.BHC.company.CEO}', '${res.BHC.company.securityName}'),
('${res.DFS.company.symbol}', '${res.DFS.company.companyName}', '${res.DFS.company.exchange}','${res.DFS.company.industry}', '${res.DFS.company.sector}', '${res.DFS.company.CEO}', '${res.DFS.company.securityName}'),
('${res.ENTG.company.symbol}', '${res.ENTG.company.companyName}', '${res.ENTG.company.exchange}','${res.ENTG.company.industry}', '${res.ENTG.company.sector}', '${res.ENTG.company.CEO}', '${res.ENTG.company.securityName}'),
('${res.FENY.company.symbol}', '${res.FENY.company.companyName}', '${res.FENY.company.exchange}','${res.FENY.company.industry}', '${res.FENY.company.sector}', '${res.FENY.company.CEO}', '${res.FENY.company.securityName}'),
('${res.FHLC.company.symbol}', '${res.FHLC.company.companyName}', '${res.FHLC.company.exchange}','${res.FHLC.company.industry}', '${res.FHLC.company.sector}', '${res.FHLC.company.CEO}', '${res.FHLC.company.securityName}'),
('${res.FITB.company.symbol}', '${res.FITB.company.companyName}', '${res.FITB.company.exchange}','${res.FITB.company.industry}', '${res.FITB.company.sector}', '${res.FITB.company.CEO}', '${res.FITB.company.securityName}'),
('${res.FREL.company.symbol}', '${res.FREL.company.companyName}', '${res.FREL.company.exchange}','${res.FREL.company.industry}', '${res.FREL.company.sector}', '${res.FREL.company.CEO}', '${res.FREL.company.securityName}'),
('${res.FUTY.company.symbol}', '${res.FUTY.company.companyName}', '${res.FUTY.company.exchange}','${res.FUTY.company.industry}', '${res.FUTY.company.sector}', '${res.FUTY.company.CEO}', '${res.FUTY.company.securityName}'),
('${res.GM.company.symbol}', '${res.GM.company.companyName}', '${res.GM.company.exchange}','${res.GM.company.industry}', '${res.GM.company.sector}', '${res.GM.company.CEO}', '${res.GM.company.securityName}'),
('${res.HUM.company.symbol}', '${res.HUM.company.companyName}', '${res.HUM.company.exchange}','${res.HUM.company.industry}', '${res.HUM.company.sector}', '${res.HUM.company.CEO}', '${res.HUM.company.securityName}'),
('${res.IGLB.company.symbol}', '${res.IGLB.company.companyName}', '${res.IGLB.company.exchange}','${res.IGLB.company.industry}', '${res.IGLB.company.sector}', '${res.IGLB.company.CEO}', '${res.IGLB.company.securityName}'),
('${res.IJR.company.symbol}', '${res.IJR.company.companyName}', '${res.IJR.company.exchange}','${res.IJR.company.industry}', '${res.IJR.company.sector}', '${res.IJR.company.CEO}', '${res.IJR.company.securityName}'),
('${res.INTC.company.symbol}', '${res.INTC.company.companyName}', '${res.INTC.company.exchange}','${res.INTC.company.industry}', '${res.INTC.company.sector}', '${res.INTC.company.CEO}', '${res.INTC.company.securityName}'),
('${res.PFE.company.symbol}', '${res.PFE.company.companyName}', '${res.PFE.company.exchange}','${res.PFE.company.industry}', '${res.PFE.company.sector}', '${res.PFE.company.CEO}', '${res.PFE.company.securityName}'),
('${res.ROST.company.symbol}', '${res.ROST.company.companyName}', '${res.ROST.company.exchange}','${res.ROST.company.industry}', '${res.ROST.company.sector}', '${res.ROST.company.CEO}', '${res.ROST.company.securityName}')`



console.log(result)
/*
var stockList = ["PG", "VZ", "MRK", "CMCSA", "ORCL", "NKE", "AMGN", "SBUX", "DHR", "BMY", "SYK", "MS", "CELG", "CI", "TGT", "AEP", "BIIB", "FISV", "DAL", "MFC", "ALL", "TRI", "HSY", "IQV", "LUV", "RACE", "DFS", "MCK", "ALXN", "FNMA", "CERN", "HIG", "SNPS", "KEYS", "CPRT", "CDNS", "CHD", "CDW", "HEI", "OMC", "LH", "HBAN", "HAS", "DISCA", "HOLX", "ALLY", "WRB", "LDOS", "FNF", "ARNC", "ZBRA", "OTEX", "RNG", "EQH", "WST", "URI", "BAH", "DVA", "AZPN", "ARCC", "VOYA", "AER", "HUBS", "FAF", "HAE", "CIEN", "ICL", "INXN", "ALSN", "MDU", "IART", "BPOP", "OMF", "EV", "FHN", "JBLU", "MTZ", "ESNT", "RDN", "AWI", "TTEK", "AGO", "FTDR", "SEDG", "AAN", "FCN", "SF", "FNB", "UMPQ", "JJSF", "LM", "GLOB", "ENPH", "FII", "CRUS", "MEDP", "HLI", "WAFD", "CATY", "FULT", "BAC", "BHC", "DFS", "ENTG", "FENY", "FHLC", "FITB", "FREL", "FUTY", "GM", "HUM", "IGLB", "IJR", "INTC", "PFE", "ROST"]

for (let prop in stockList)
{
    if(prop == 0)
    {
        var result = 'INSERT INTO companyiex(symbol, companyName, exchange, industry, sector, CEO, securityName) VALUES(\'${res.' + stockList[prop] + '.company.symbol}\', \'${res.' + stockList[prop] + '.company.companyName}\', \'${res.' + stockList[prop] + '.company.exchange}\',\'${res.' + stockList[prop] + '.company.industry}\', \'${res.' + stockList[prop] + '.company.sector}\', \'${res.' + stockList[prop] + '.company.CEO}\', \'${res.' + stockList[prop] + '.company.securityName}\'),'
    }
    else if (prop == stockList.length-1)
    {
        var result = '(\'${res.' + stockList[prop] + '.company.symbol}\', \'${res.' + stockList[prop] + '.company.companyName}\', \'${res.' + stockList[prop] + '.company.exchange}\',\'${res.' + stockList[prop] + '.company.industry}\', \'${res.' + stockList[prop] + '.company.sector}\', \'${res.' + stockList[prop] + '.company.CEO}\', \'${res.' + stockList[prop] + '.company.securityName}\')'
    }
    else
    {
        var result = '(\'${res.' + stockList[prop] + '.company.symbol}\', \'${res.' + stockList[prop] + '.company.companyName}\', \'${res.' + stockList[prop] + '.company.exchange}\',\'${res.' + stockList[prop] + '.company.industry}\', \'${res.' + stockList[prop] + '.company.sector}\', \'${res.' + stockList[prop] + '.company.CEO}\', \'${res.' + stockList[prop] + '.company.securityName}\'),'
    }
   console.log(result)
}
/*
for(let prop in stockList)
{
    if (prop == 0)
    {
        var result = 'INSERT INTO earningsiex(symbol, epsreportdate, actualeps, consensuseps, epssurprisedollar, fiscalperiod, fiscalenddate, yearago, yearagochangepercent) VALUES(\'),'
    }
}
*/

