import React from "react";

const SapGreenToken = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-24 text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-green-700">
          SAP Green Token
        </h1>

        <p className="mb-6 text-justify">
          <strong>
            Enhancing sustainability and traceability in your supply chain.
          </strong>
        </p>

        <p className="mb-6 text-justify">
          SAP Green Token offers an innovative solution by leveraging blockchain
          technology to provide transactional-level proof of sustainable actions
          across the entire supply chain. By utilizing blockchain, SAP Green Token
          ensures that every step of the supply chain is transparent, traceable,
          and immutable.
        </p>

        <p className="mb-6 text-justify">
          This technology enables your organization to verify and document
          sustainable practices, from raw material sourcing to production,
          distribution, and final delivery. By integrating SAP Green Token into
          your supply chain, you can achieve greater visibility, accountability,
          and compliance, paving the way for a more sustainable future.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mb-4 mt-10">
          Key Benefits of SAP Green Token
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-justify">
          <li>
            <strong>Enhanced traceability:</strong> Track the origin and
            sustainability of raw materials with precision.
          </li>
          <li>
            <strong>Regulatory compliance:</strong> Ensure compliance with
            standards such as ISCC, REDcert, and EUDR.
          </li>
          <li>
            <strong>Operational efficiency:</strong> Integrate seamlessly with
            your existing ERP systems, including SAP ECC, SAP S/4HANA, or non-SAP
            platforms.
          </li>
          <li>
            <strong>Transparency:</strong> Provide stakeholders with verifiable
            data on the sustainability of your products.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          SAP Green Token Combines Three Innovative Principles
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-green-600">1. Tokenization</h3>
            <p className="text-justify">
              Tokenization lies at the heart of SAP Green Token. This process
              converts physical assets into digital tokens that represent the
              sustainability attributes of raw materials. These unique digital
              twins can be tracked and managed throughout the supply chain,
              ensuring that the sustainability claims are both verifiable and
              transparent.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-600">
              2. Blockchain Technology
            </h3>
            <p className="text-justify">
              SAP Green Token leverages blockchain technology to create an
              immutable and auditable chain of custody. This ensures that every
              transaction and transfer of materials is recorded in a secure and
              transparent manner. Blockchain provides a trusted platform for
              verifying the origin and sustainability of raw materials, helping
              businesses comply with industry standards and regulations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-600">
              3. Mass Balance Accounting
            </h3>
            <p className="text-justify">
              Mass balance accounting is a flexible approach that allows
              businesses to account for both sustainable and conventional
              materials within the same supply chain. This method tracks the input
              and output of materials, ensuring that the proportion of sustainable
              materials is accurately represented. Together with segregated
              accounting, traceability for commingled and continuously processed
              materials is ensured.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-green-700 mt-12 mb-4">
          EUDR Compliance Readiness
        </h2>
        <p className="mb-6 text-justify">
          Starting December 30th, 2025, large companies located within the
          European Union (EU) or selling goods in the EU must comply with the
          European Union Deforestation Regulation (EUDR).
        </p>
        <p className="mb-6 text-justify">
          SAP Green Token is designed to help businesses meet EUDR compliance. The
          solution supports automated Due Diligence Statement (DDS) reporting,
          coming in 2025, and meets the audit history requirements mandated by
          EUDR. Additionally, it integrates with data providers such as LiveEO
          TradeAware for standardized location information and the EUDR reporting
          platform, TRACES, ensuring that businesses can efficiently manage and
          report their sustainability data in line with the new regulations.
        </p>
      </div>
    </>
  );
};

export default SapGreenToken;
